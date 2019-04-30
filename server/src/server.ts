import * as grpc from "grpc";
import {Logger} from "pino";

import {IUserServiceServer, UserServiceService} from "./proto/users_grpc_pb";
import {Empty, GetUserRequest, User, UserId, UserList} from "./proto/users_pb";

class ServerImpl implements IUserServiceServer {
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    getUser(call: grpc.ServerUnaryCall<GetUserRequest>,
            callback: grpc.sendUnaryData<User>) {
        const user = new User();

        this.logger.info('Calculate', call.request.toObject());

        user.setUserId(1);
        user.setName('Test User');
        user.setEmail('testuser@test.com');

        this.logger.info('[getUser] Done: ${JSON.stringify(user.toObject())}');
        callback(null, user);
    };

    insertUser: grpc.handleUnaryCall<User, Empty>;
    listUsers: grpc.handleUnaryCall<Empty, UserList>;
    removeUser: grpc.handleUnaryCall<UserId, Empty>;
}


export function createGrpcServer(port: string, logger: Logger): grpc.Server {
    const server = new grpc.Server();

    server.addService(UserServiceService, new ServerImpl(logger));

    server.bind(port, grpc.ServerCredentials.createInsecure());

    return server;
}
