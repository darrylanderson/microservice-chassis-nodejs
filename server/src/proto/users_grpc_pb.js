// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_pb = require('./users_pb.js');

function serialize_users_Empty(arg) {
  if (!(arg instanceof users_pb.Empty)) {
    throw new Error('Expected argument of type users.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_Empty(buffer_arg) {
  return users_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_User(arg) {
  if (!(arg instanceof users_pb.User)) {
    throw new Error('Expected argument of type users.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_User(buffer_arg) {
  return users_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_UserId(arg) {
  if (!(arg instanceof users_pb.UserId)) {
    throw new Error('Expected argument of type users.UserId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_UserId(buffer_arg) {
  return users_pb.UserId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_UserList(arg) {
  if (!(arg instanceof users_pb.UserList)) {
    throw new Error('Expected argument of type users.UserList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_UserList(buffer_arg) {
  return users_pb.UserList.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  listUsers: {
    path: '/users.UserService/ListUsers',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.Empty,
    responseType: users_pb.UserList,
    requestSerialize: serialize_users_Empty,
    requestDeserialize: deserialize_users_Empty,
    responseSerialize: serialize_users_UserList,
    responseDeserialize: deserialize_users_UserList,
  },
  getUser: {
    path: '/users.UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.UserId,
    responseType: users_pb.User,
    requestSerialize: serialize_users_UserId,
    requestDeserialize: deserialize_users_UserId,
    responseSerialize: serialize_users_User,
    responseDeserialize: deserialize_users_User,
  },
  insertUser: {
    path: '/users.UserService/InsertUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.User,
    responseType: users_pb.Empty,
    requestSerialize: serialize_users_User,
    requestDeserialize: deserialize_users_User,
    responseSerialize: serialize_users_Empty,
    responseDeserialize: deserialize_users_Empty,
  },
  removeUser: {
    path: '/users.UserService/RemoveUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.UserId,
    responseType: users_pb.Empty,
    requestSerialize: serialize_users_UserId,
    requestDeserialize: deserialize_users_UserId,
    responseSerialize: serialize_users_Empty,
    responseDeserialize: deserialize_users_Empty,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
