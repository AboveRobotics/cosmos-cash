/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "allinbits.cosmoscash.issuer";
const baseIssuer = { token: "", fee: 0, issuerDid: "", paused: false };
export const Issuer = {
    encode(message, writer = Writer.create()) {
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        if (message.fee !== 0) {
            writer.uint32(16).int32(message.fee);
        }
        if (message.issuerDid !== "") {
            writer.uint32(26).string(message.issuerDid);
        }
        if (message.paused === true) {
            writer.uint32(32).bool(message.paused);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIssuer };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.fee = reader.int32();
                    break;
                case 3:
                    message.issuerDid = reader.string();
                    break;
                case 4:
                    message.paused = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseIssuer };
        if (object.token !== undefined && object.token !== null) {
            message.token = String(object.token);
        }
        else {
            message.token = "";
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = Number(object.fee);
        }
        else {
            message.fee = 0;
        }
        if (object.issuerDid !== undefined && object.issuerDid !== null) {
            message.issuerDid = String(object.issuerDid);
        }
        else {
            message.issuerDid = "";
        }
        if (object.paused !== undefined && object.paused !== null) {
            message.paused = Boolean(object.paused);
        }
        else {
            message.paused = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token);
        message.fee !== undefined && (obj.fee = message.fee);
        message.issuerDid !== undefined && (obj.issuerDid = message.issuerDid);
        message.paused !== undefined && (obj.paused = message.paused);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIssuer };
        if (object.token !== undefined && object.token !== null) {
            message.token = object.token;
        }
        else {
            message.token = "";
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = object.fee;
        }
        else {
            message.fee = 0;
        }
        if (object.issuerDid !== undefined && object.issuerDid !== null) {
            message.issuerDid = object.issuerDid;
        }
        else {
            message.issuerDid = "";
        }
        if (object.paused !== undefined && object.paused !== null) {
            message.paused = object.paused;
        }
        else {
            message.paused = false;
        }
        return message;
    },
};
