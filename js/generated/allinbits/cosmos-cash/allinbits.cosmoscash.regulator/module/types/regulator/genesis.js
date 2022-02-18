/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "allinbits.cosmoscash.regulator";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.regulators !== undefined) {
            Regulators.encode(message.regulators, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.regulators = Regulators.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        if (object.regulators !== undefined && object.regulators !== null) {
            message.regulators = Regulators.fromJSON(object.regulators);
        }
        else {
            message.regulators = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.regulators !== undefined &&
            (obj.regulators = message.regulators
                ? Regulators.toJSON(message.regulators)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        if (object.regulators !== undefined && object.regulators !== null) {
            message.regulators = Regulators.fromPartial(object.regulators);
        }
        else {
            message.regulators = undefined;
        }
        return message;
    },
};
const baseRegulators = { addresses: "" };
export const Regulators = {
    encode(message, writer = Writer.create()) {
        for (const v of message.addresses) {
            writer.uint32(10).string(v);
        }
        Object.entries(message.dids).forEach(([key, value]) => {
            Regulators_DidsEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRegulators };
        message.addresses = [];
        message.dids = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(reader.string());
                    break;
                case 2:
                    const entry2 = Regulators_DidsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.dids[entry2.key] = entry2.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRegulators };
        message.addresses = [];
        message.dids = {};
        if (object.addresses !== undefined && object.addresses !== null) {
            for (const e of object.addresses) {
                message.addresses.push(String(e));
            }
        }
        if (object.dids !== undefined && object.dids !== null) {
            Object.entries(object.dids).forEach(([key, value]) => {
                message.dids[key] = String(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map((e) => e);
        }
        else {
            obj.addresses = [];
        }
        obj.dids = {};
        if (message.dids) {
            Object.entries(message.dids).forEach(([k, v]) => {
                obj.dids[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRegulators };
        message.addresses = [];
        message.dids = {};
        if (object.addresses !== undefined && object.addresses !== null) {
            for (const e of object.addresses) {
                message.addresses.push(e);
            }
        }
        if (object.dids !== undefined && object.dids !== null) {
            Object.entries(object.dids).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.dids[key] = String(value);
                }
            });
        }
        return message;
    },
};
const baseRegulators_DidsEntry = { key: "", value: "" };
export const Regulators_DidsEntry = {
    encode(message, writer = Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRegulators_DidsEntry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRegulators_DidsEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRegulators_DidsEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        return message;
    },
};
