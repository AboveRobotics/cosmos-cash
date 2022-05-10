import { Reader, Writer } from "protobufjs/minimal";
import { VerifiableCredential } from "../verifiable-credential/verifiable-credential";
export declare const protobufPackage = "allinbits.cosmoscash.verifiablecredential";
/** MsgRevokeCredential */
export interface MsgRevokeCredential {
    credentialId: string;
    owner: string;
}
/** MsgRevokeCredentialResponse */
export interface MsgRevokeCredentialResponse {
}
/**
 * MsgIssueCredential is used to issue new registration credential
 * this message is used by other modules
 */
export interface MsgIssueCredential {
    credential: VerifiableCredential | undefined;
    owner: string;
}
/** MsgIssueCredentialResponse reply for the issue credential call */
export interface MsgIssueCredentialResponse {
}
export declare const MsgRevokeCredential: {
    encode(message: MsgRevokeCredential, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRevokeCredential;
    fromJSON(object: any): MsgRevokeCredential;
    toJSON(message: MsgRevokeCredential): unknown;
    fromPartial(object: DeepPartial<MsgRevokeCredential>): MsgRevokeCredential;
};
export declare const MsgRevokeCredentialResponse: {
    encode(_: MsgRevokeCredentialResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRevokeCredentialResponse;
    fromJSON(_: any): MsgRevokeCredentialResponse;
    toJSON(_: MsgRevokeCredentialResponse): unknown;
    fromPartial(_: DeepPartial<MsgRevokeCredentialResponse>): MsgRevokeCredentialResponse;
};
export declare const MsgIssueCredential: {
    encode(message: MsgIssueCredential, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgIssueCredential;
    fromJSON(object: any): MsgIssueCredential;
    toJSON(message: MsgIssueCredential): unknown;
    fromPartial(object: DeepPartial<MsgIssueCredential>): MsgIssueCredential;
};
export declare const MsgIssueCredentialResponse: {
    encode(_: MsgIssueCredentialResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgIssueCredentialResponse;
    fromJSON(_: any): MsgIssueCredentialResponse;
    toJSON(_: MsgIssueCredentialResponse): unknown;
    fromPartial(_: DeepPartial<MsgIssueCredentialResponse>): MsgIssueCredentialResponse;
};
/** Msg defines the identity Msg service. */
export interface Msg {
    /** RevokeCredential a credential */
    RevokeCredential(request: MsgRevokeCredential): Promise<MsgRevokeCredentialResponse>;
    /** Issue a new Verifiable Credential */
    IssueCredential(request: MsgIssueCredential): Promise<MsgIssueCredentialResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RevokeCredential(request: MsgRevokeCredential): Promise<MsgRevokeCredentialResponse>;
    IssueCredential(request: MsgIssueCredential): Promise<MsgIssueCredentialResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
