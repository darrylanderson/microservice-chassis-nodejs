import {Tracer} from "@opencensus/core";
import {Logger} from "pino";
import {IUserServiceServer, UserServiceService} from "./proto/users_grpc_pb";
import {Empty, User, UserId, UserList} from "./proto/users_pb";
import grpc = require("grpc");

class ServerImpl implements IUserServiceServer {
    public insertUser: grpc.handleUnaryCall<User, Empty>;
    public listUsers: grpc.handleUnaryCall<Empty, UserList>;
    public removeUser: grpc.handleUnaryCall<UserId, Empty>;
    private tracer: Tracer;
    private logger: Logger;

    constructor(tracer: Tracer,
                logger: Logger) {
        this.tracer = tracer;
        this.logger = logger;
    }

    public getUser(call: grpc.ServerUnaryCall<UserId>,
                   callback: grpc.sendUnaryData<User>) {
        const span = this.tracer.startChildSpan("microservice-chassis-nodejs.ServerImpl.getUser");

        const user = new User();

        this.logger.info("Calculate", call.request.toObject());

        user.setUserId(1);
        user.setName("Test User");
        user.setEmail("testuser@test.com");

        this.logger.info("[getUser] Done: ${JSON.stringify(user.toObject())}");

        span.end();

        callback(null, user);
    }
}

export function createGrpcServer(port: string,
                                 tracer: Tracer,
                                 logger: Logger): grpc.Server {
    const server = new grpc.Server();

    server.addService(UserServiceService, new ServerImpl(tracer, logger));

    server.bind(port, grpc.ServerCredentials.createInsecure());

    return server;
}
