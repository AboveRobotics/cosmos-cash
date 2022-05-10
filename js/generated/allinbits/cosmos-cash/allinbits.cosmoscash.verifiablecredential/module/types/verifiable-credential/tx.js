/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { VerifiableCredential } from "../verifiable-credential/verifiable-credential";
export const protobufPackage = "allinbits.cosmoscash.verifiablecredential";
const baseMsgRevokeCredential = { credentialId: "", owner: "" };
export const MsgRevokeCredential = {
    encode(message, writer = Writer.create()) {
        if (message.credentialId !== "") {
            writer.uint32(10).string(message.credentialId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRevokeCredential };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.credentialId = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRevokeCredential };
        if (object.credentialId !== undefined && object.credentialId !== null) {
            message.credentialId = String(object.credentialId);
        }
        else {
            message.credentialId = "";
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.credentialId !== undefined &&
            (obj.credentialId = message.credentialId);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRevokeCredential };
        if (object.credentialId !== undefined && object.credentialId !== null) {
            message.credentialId = object.credentialId;
        }
        else {
            message.credentialId = "";
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        return message;
    },
};
const baseMsgRevokeCredentialResponse = {};
export const MsgRevokeCredentialResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRevokeCredentialResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgRevokeCredentialResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgRevokeCredentialResponse,
        };
        return message;
    },
};
const baseMsgIssueCredential = { owner: "" };
export const MsgIssueCredential = {
    encode(message, writer = Writer.create()) {
        if (message.credential !== undefined) {
            VerifiableCredential.encode(message.credential, writer.uint32(10).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgIssueCredential };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.credential = VerifiableCredential.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgIssueCredential };
        if (object.credential !== undefined && object.credential !== null) {
            message.credential = VerifiableCredential.fromJSON(object.credential);
        }
        else {
            message.credential = undefined;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.credential !== undefined &&
            (obj.credential = message.credential
                ? VerifiableCredential.toJSON(message.credential)
                : undefined);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgIssueCredential };
        if (object.credential !== undefined && object.credential !== null) {
            message.credential = VerifiableCredential.fromPartial(object.credential);
        }
        else {
            message.credential = undefined;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        return message;
    },
};
const baseMsgIssueCredentialResponse = {};
export const MsgIssueCredentialResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgIssueCredentialResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgIssueCredentialResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgIssueCredentialResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    RevokeCredential(request) {
        const data = MsgRevokeCredential.encode(request).finish();
        const promise = this.rpc.request("allinbits.cosmoscash.verifiablecredential.Msg", "RevokeCredential", data);
        return promise.then((data) => MsgRevokeCredentialResponse.decode(new Reader(data)));
    }
    IssueCredential(request) {
        const data = MsgIssueCredential.encode(request).finish();
        const promise = this.rpc.request("allinbits.cosmoscash.verifiablecredential.Msg", "IssueCredential", data);
        return promise.then((data) => MsgIssueCredentialResponse.decode(new Reader(data)));
    }
}
