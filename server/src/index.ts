import { createGrpcServer } from './server';
import * as pino from 'pino';

const port = "127.0.0.1:5000";
const logger = pino({
    name: 'microservice-chassis-nodejs'
});

const server = createGrpcServer(port, logger);

server.start();

logger.info(`grpc server started... listening on ip: ${port}`);