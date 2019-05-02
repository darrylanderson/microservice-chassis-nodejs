import * as pino from "pino";
// tracing
import {setupTracerAndExporters} from "./metrics";
// grpc server
import {createGrpcServer} from "./server";

// Listening IP
const port = "127.0.0.1:5000";

// Set up logger
const logger = pino({
    name: "microservice-chassis-nodejs",
});

// Start tracing
const tracer = setupTracerAndExporters();

// Create and start the grpc server
const server = createGrpcServer(port, tracer, logger);
server.start();

logger.info(`grpc server started... listening on ip: ${port}`);
