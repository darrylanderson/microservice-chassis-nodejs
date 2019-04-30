// package: users
// file: users.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as users_pb from "./users_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listUsers: IUserServiceService_IListUsers;
    getUser: IUserServiceService_IGetUser;
    insertUser: IUserServiceService_IInsertUser;
    removeUser: IUserServiceService_IRemoveUser;
}

interface IUserServiceService_IListUsers extends grpc.MethodDefinition<users_pb.Empty, users_pb.UserList> {
    path: string; // "/users.UserService/ListUsers"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.Empty>;
    requestDeserialize: grpc.deserialize<users_pb.Empty>;
    responseSerialize: grpc.serialize<users_pb.UserList>;
    responseDeserialize: grpc.deserialize<users_pb.UserList>;
}
interface IUserServiceService_IGetUser extends grpc.MethodDefinition<users_pb.UserId, users_pb.User> {
    path: string; // "/users.UserService/GetUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.UserId>;
    requestDeserialize: grpc.deserialize<users_pb.UserId>;
    responseSerialize: grpc.serialize<users_pb.User>;
    responseDeserialize: grpc.deserialize<users_pb.User>;
}
interface IUserServiceService_IInsertUser extends grpc.MethodDefinition<users_pb.User, users_pb.Empty> {
    path: string; // "/users.UserService/InsertUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.User>;
    requestDeserialize: grpc.deserialize<users_pb.User>;
    responseSerialize: grpc.serialize<users_pb.Empty>;
    responseDeserialize: grpc.deserialize<users_pb.Empty>;
}
interface IUserServiceService_IRemoveUser extends grpc.MethodDefinition<users_pb.UserId, users_pb.Empty> {
    path: string; // "/users.UserService/RemoveUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.UserId>;
    requestDeserialize: grpc.deserialize<users_pb.UserId>;
    responseSerialize: grpc.serialize<users_pb.Empty>;
    responseDeserialize: grpc.deserialize<users_pb.Empty>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    listUsers: grpc.handleUnaryCall<users_pb.Empty, users_pb.UserList>;
    getUser: grpc.handleUnaryCall<users_pb.UserId, users_pb.User>;
    insertUser: grpc.handleUnaryCall<users_pb.User, users_pb.Empty>;
    removeUser: grpc.handleUnaryCall<users_pb.UserId, users_pb.Empty>;
}

export interface IUserServiceClient {
    listUsers(request: users_pb.Empty, callback: (error: grpc.ServiceError | null, response: users_pb.UserList) => void): grpc.ClientUnaryCall;
    listUsers(request: users_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UserList) => void): grpc.ClientUnaryCall;
    listUsers(request: users_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UserList) => void): grpc.ClientUnaryCall;
    getUser(request: users_pb.UserId, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: users_pb.UserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: users_pb.UserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    insertUser(request: users_pb.User, callback: (error: grpc.ServiceError | null, response: users_pb.Empty) => void): grpc.ClientUnaryCall;
    insertUser(request: users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.Empty) => void): grpc.ClientUnaryCall;
    insertUser(request: users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.Empty) => void): grpc.ClientUnaryCall;
    removeUser(request: users_pb.UserId, callback: (error: grpc.ServiceError | null, response: users_pb.Empty) => void): grpc.ClientUnaryCall;
    removeUser(request: users_pb.UserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.Empty) => void): grpc.ClientUnaryCall;
    removeUser(request: users_pb.UserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listUsers(request: users_pb.Empty, callback: (error: grpc.ServiceError | null, response: users_pb.UserList) => void): grpc.ClientUnaryCall;
    public listUsers(request: users_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UserList) => void): grpc.ClientUnaryCall;
    public listUsers(request: users_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UserList) => void): grpc.ClientUnaryCall;
    public getUser(request: users_pb.UserId, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: users_pb.UserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: users_pb.UserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public insertUser(request: users_pb.User, callback: (error: grpc.ServiceError | null, response: users_pb.Empty) => void): grpc.ClientUnaryCall;
    public insertUser(request: users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.Empty) => void): grpc.ClientUnaryCall;
    public insertUser(request: users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.Empty) => void): grpc.ClientUnaryCall;
    public removeUser(request: users_pb.UserId, callback: (error: grpc.ServiceError | null, response: users_pb.Empty) => void): grpc.ClientUnaryCall;
    public removeUser(request: users_pb.UserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.Empty) => void): grpc.ClientUnaryCall;
    public removeUser(request: users_pb.UserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.Empty) => void): grpc.ClientUnaryCall;
}
