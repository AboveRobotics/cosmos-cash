/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { VerifiableCredential } from "../verifiable-credential/verifiable-credential";
export const protobufPackage = "allinbits.cosmoscash.regulator";
const baseMsgIssueRegulatorCredential = { owner: "" };
export const MsgIssueRegulatorCredential = {
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
        const message = {
            ...baseMsgIssueRegulatorCredential,
        };
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
        const message = {
            ...baseMsgIssueRegulatorCredential,
        };
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
        const message = {
            ...baseMsgIssueRegulatorCredential,
        };
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
const baseMsgIssueRegulatorCredentialResponse = {};
export const MsgIssueRegulatorCredentialResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgIssueRegulatorCredentialResponse,
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
            ...baseMsgIssueRegulatorCredentialResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgIssueRegulatorCredentialResponse,
        };
        return message;
    },
};
const baseMsgIssueRegistrationCredential = { owner: "" };
export const MsgIssueRegistrationCredential = {
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
        const message = {
            ...baseMsgIssueRegistrationCredential,
        };
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
        const message = {
            ...baseMsgIssueRegistrationCredential,
        };
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
        const message = {
            ...baseMsgIssueRegistrationCredential,
        };
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
const baseMsgIssueRegistrationCredentialResponse = {};
export const MsgIssueRegistrationCredentialResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgIssueRegistrationCredentialResponse,
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
            ...baseMsgIssueRegistrationCredentialResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgIssueRegistrationCredentialResponse,
        };
        return message;
    },
};
const baseMsgIssueLicenseCredential = { owner: "" };
export const MsgIssueLicenseCredential = {
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
        const message = {
            ...baseMsgIssueLicenseCredential,
        };
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
        const message = {
            ...baseMsgIssueLicenseCredential,
        };
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
        const message = {
            ...baseMsgIssueLicenseCredential,
        };
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
const baseMsgIssueLicenseCredentialResponse = {};
export const MsgIssueLicenseCredentialResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgIssueLicenseCredentialResponse,
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
            ...baseMsgIssueLicenseCredentialResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgIssueLicenseCredentialResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    IssueRegulatorCredential(request) {
        const data = MsgIssueRegulatorCredential.encode(request).finish();
        const promise = this.rpc.request("allinbits.cosmoscash.regulator.Msg", "IssueRegulatorCredential", data);
        return promise.then((data) => MsgIssueRegulatorCredentialResponse.decode(new Reader(data)));
    }
    IssueRegistrationCredential(request) {
        const data = MsgIssueRegistrationCredential.encode(request).finish();
        const promise = this.rpc.request("allinbits.cosmoscash.regulator.Msg", "IssueRegistrationCredential", data);
        return promise.then((data) => MsgIssueRegistrationCredentialResponse.decode(new Reader(data)));
    }
    IssueLicenseCredential(request) {
        const data = MsgIssueLicenseCredential.encode(request).finish();
        const promise = this.rpc.request("allinbits.cosmoscash.regulator.Msg", "IssueLicenseCredential", data);
        return promise.then((data) => MsgIssueLicenseCredentialResponse.decode(new Reader(data)));
    }
}
