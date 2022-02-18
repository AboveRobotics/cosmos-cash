import { Reader, Writer } from "protobufjs/minimal";
import { VerifiableCredential } from "../verifiable-credential/verifiable-credential";
export declare const protobufPackage = "allinbits.cosmoscash.regulator";
/** MsgIssueRegulatorCredential is used to activate a regulator on chain */
export interface MsgIssueRegulatorCredential {
    credential: VerifiableCredential | undefined;
    owner: string;
}
/**
 * MsgActivateResponse contains the reponse for a successful activation
 * of a regulator on chain
 */
export interface MsgIssueRegulatorCredentialResponse {
}
export interface MsgIssueRegistrationCredential {
    credential: VerifiableCredential | undefined;
    owner: string;
}
/** MsgIssueRegistrationCredentialResponse reply for the IssueRegistartion call */
export interface MsgIssueRegistrationCredentialResponse {
}
/** MsgIssueLicenseCredential message contains data for license credential */
export interface MsgIssueLicenseCredential {
    credential: VerifiableCredential | undefined;
    owner: string;
}
/** MsgIssueLicenseCredentialResponse reply for the issue license call */
export interface MsgIssueLicenseCredentialResponse {
}
export declare const MsgIssueRegulatorCredential: {
    encode(message: MsgIssueRegulatorCredential, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgIssueRegulatorCredential;
    fromJSON(object: any): MsgIssueRegulatorCredential;
    toJSON(message: MsgIssueRegulatorCredential): unknown;
    fromPartial(object: DeepPartial<MsgIssueRegulatorCredential>): MsgIssueRegulatorCredential;
};
export declare const MsgIssueRegulatorCredentialResponse: {
    encode(_: MsgIssueRegulatorCredentialResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgIssueRegulatorCredentialResponse;
    fromJSON(_: any): MsgIssueRegulatorCredentialResponse;
    toJSON(_: MsgIssueRegulatorCredentialResponse): unknown;
    fromPartial(_: DeepPartial<MsgIssueRegulatorCredentialResponse>): MsgIssueRegulatorCredentialResponse;
};
export declare const MsgIssueRegistrationCredential: {
    encode(message: MsgIssueRegistrationCredential, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgIssueRegistrationCredential;
    fromJSON(object: any): MsgIssueRegistrationCredential;
    toJSON(message: MsgIssueRegistrationCredential): unknown;
    fromPartial(object: DeepPartial<MsgIssueRegistrationCredential>): MsgIssueRegistrationCredential;
};
export declare const MsgIssueRegistrationCredentialResponse: {
    encode(_: MsgIssueRegistrationCredentialResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgIssueRegistrationCredentialResponse;
    fromJSON(_: any): MsgIssueRegistrationCredentialResponse;
    toJSON(_: MsgIssueRegistrationCredentialResponse): unknown;
    fromPartial(_: DeepPartial<MsgIssueRegistrationCredentialResponse>): MsgIssueRegistrationCredentialResponse;
};
export declare const MsgIssueLicenseCredential: {
    encode(message: MsgIssueLicenseCredential, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgIssueLicenseCredential;
    fromJSON(object: any): MsgIssueLicenseCredential;
    toJSON(message: MsgIssueLicenseCredential): unknown;
    fromPartial(object: DeepPartial<MsgIssueLicenseCredential>): MsgIssueLicenseCredential;
};
export declare const MsgIssueLicenseCredentialResponse: {
    encode(_: MsgIssueLicenseCredentialResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgIssueLicenseCredentialResponse;
    fromJSON(_: any): MsgIssueLicenseCredentialResponse;
    toJSON(_: MsgIssueLicenseCredentialResponse): unknown;
    fromPartial(_: DeepPartial<MsgIssueLicenseCredentialResponse>): MsgIssueLicenseCredentialResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * this line is used by starport scaffolding # proto/tx/rpc
     * Activate issue regulator credential to activate a regulator on chain
     */
    IssueRegulatorCredential(request: MsgIssueRegulatorCredential): Promise<MsgIssueRegulatorCredentialResponse>;
    /** IssueRegistrationCredential issue a new registration credential for a public entity */
    IssueRegistrationCredential(request: MsgIssueRegistrationCredential): Promise<MsgIssueRegistrationCredentialResponse>;
    /** IssueLicenseCredential issue a license to to a registered entity */
    IssueLicenseCredential(request: MsgIssueLicenseCredential): Promise<MsgIssueLicenseCredentialResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    IssueRegulatorCredential(request: MsgIssueRegulatorCredential): Promise<MsgIssueRegulatorCredentialResponse>;
    IssueRegistrationCredential(request: MsgIssueRegistrationCredential): Promise<MsgIssueRegistrationCredentialResponse>;
    IssueLicenseCredential(request: MsgIssueLicenseCredential): Promise<MsgIssueLicenseCredentialResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
