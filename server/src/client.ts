import * as grpc from "grpc";
import * as pino from "pino";
import {UserServiceClient} from "./proto/users_grpc_pb";
import {User, UserId} from "./proto/users_pb";

const logger = pino({
    name: "microservice-chassis-nodejs-client",
});

const client = new UserServiceClient("127.0.0.1:5000", grpc.credentials.createInsecure());

const request = new UserId();
request.setUserId(1);

client.getUser(request, (err: grpc.ServiceError, response: User) => {
    if (err) {
        logger.error(err);
    } else {
        logger.info(`Result: ${response.getName()}`);
    }
});
