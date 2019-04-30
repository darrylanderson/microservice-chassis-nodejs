#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

# Path to plugins
PROTOC_GEN_PLUGIN_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Working directories
PROTO_DEST=./src/proto
PROTO_SRC=../proto/

mkdir -p ${PROTO_DEST}

# Generate JavaScript code
grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:${PROTO_DEST} \
--grpc_out=${PROTO_DEST} \
--plugin=protoc-gen-grpc=${PROTOC_GEN_PLUGIN_PATH} \
-I ${PROTO_SRC} \
users.proto

# Generate TypeScript definitions
grpc_tools_node_protoc \
--plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
--ts_out=${PROTO_DEST} \
-I ${PROTO_SRC} \
users.proto

# Copy protofiles
mkdir -p dist/proto
cp -r ${PROTO_DEST}/* dist/proto
