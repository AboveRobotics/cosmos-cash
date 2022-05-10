/* eslint-disable */
import { Timestamp } from "../google/protobuf/timestamp";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "allinbits.cosmoscash.verifiablecredential";
const baseVerifiableCredential = {
    context: "",
    id: "",
    type: "",
    issuer: "",
};
export const VerifiableCredential = {
    encode(message, writer = Writer.create()) {
        for (const v of message.context) {
            writer.uint32(10).string(v);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        for (const v of message.type) {
            writer.uint32(26).string(v);
        }
        if (message.issuer !== "") {
            writer.uint32(34).string(message.issuer);
        }
        if (message.issuanceDate !== undefined) {
            Timestamp.encode(toTimestamp(message.issuanceDate), writer.uint32(42).fork()).ldelim();
        }
        if (message.regulatorCred !== undefined) {
            RegulatorCredentialSubject.encode(message.regulatorCred, writer.uint32(50).fork()).ldelim();
        }
        if (message.registrationCred !== undefined) {
            RegistrationCredentialSubject.encode(message.registrationCred, writer.uint32(58).fork()).ldelim();
        }
        if (message.licenseCred !== undefined) {
            LicenseCredentialSubject.encode(message.licenseCred, writer.uint32(66).fork()).ldelim();
        }
        if (message.userCred !== undefined) {
            UserCredentialSubject.encode(message.userCred, writer.uint32(74).fork()).ldelim();
        }
        if (message.arbitraryCred !== undefined) {
            ArbitraryCredentialSubject.encode(message.arbitraryCred, writer.uint32(90).fork()).ldelim();
        }
        if (message.proof !== undefined) {
            Proof.encode(message.proof, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVerifiableCredential };
        message.context = [];
        message.type = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.context.push(reader.string());
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.type.push(reader.string());
                    break;
                case 4:
                    message.issuer = reader.string();
                    break;
                case 5:
                    message.issuanceDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.regulatorCred = RegulatorCredentialSubject.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.registrationCred = RegistrationCredentialSubject.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.licenseCred = LicenseCredentialSubject.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.userCred = UserCredentialSubject.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.arbitraryCred = ArbitraryCredentialSubject.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.proof = Proof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVerifiableCredential };
        message.context = [];
        message.type = [];
        if (object.context !== undefined && object.context !== null) {
            for (const e of object.context) {
                message.context.push(String(e));
            }
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.type !== undefined && object.type !== null) {
            for (const e of object.type) {
                message.type.push(String(e));
            }
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = String(object.issuer);
        }
        else {
            message.issuer = "";
        }
        if (object.issuanceDate !== undefined && object.issuanceDate !== null) {
            message.issuanceDate = fromJsonTimestamp(object.issuanceDate);
        }
        else {
            message.issuanceDate = undefined;
        }
        if (object.regulatorCred !== undefined && object.regulatorCred !== null) {
            message.regulatorCred = RegulatorCredentialSubject.fromJSON(object.regulatorCred);
        }
        else {
            message.regulatorCred = undefined;
        }
        if (object.registrationCred !== undefined &&
            object.registrationCred !== null) {
            message.registrationCred = RegistrationCredentialSubject.fromJSON(object.registrationCred);
        }
        else {
            message.registrationCred = undefined;
        }
        if (object.licenseCred !== undefined && object.licenseCred !== null) {
            message.licenseCred = LicenseCredentialSubject.fromJSON(object.licenseCred);
        }
        else {
            message.licenseCred = undefined;
        }
        if (object.userCred !== undefined && object.userCred !== null) {
            message.userCred = UserCredentialSubject.fromJSON(object.userCred);
        }
        else {
            message.userCred = undefined;
        }
        if (object.arbitraryCred !== undefined && object.arbitraryCred !== null) {
            message.arbitraryCred = ArbitraryCredentialSubject.fromJSON(object.arbitraryCred);
        }
        else {
            message.arbitraryCred = undefined;
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = Proof.fromJSON(object.proof);
        }
        else {
            message.proof = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.context) {
            obj.context = message.context.map((e) => e);
        }
        else {
            obj.context = [];
        }
        message.id !== undefined && (obj.id = message.id);
        if (message.type) {
            obj.type = message.type.map((e) => e);
        }
        else {
            obj.type = [];
        }
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.issuanceDate !== undefined &&
            (obj.issuanceDate =
                message.issuanceDate !== undefined
                    ? message.issuanceDate.toISOString()
                    : null);
        message.regulatorCred !== undefined &&
            (obj.regulatorCred = message.regulatorCred
                ? RegulatorCredentialSubject.toJSON(message.regulatorCred)
                : undefined);
        message.registrationCred !== undefined &&
            (obj.registrationCred = message.registrationCred
                ? RegistrationCredentialSubject.toJSON(message.registrationCred)
                : undefined);
        message.licenseCred !== undefined &&
            (obj.licenseCred = message.licenseCred
                ? LicenseCredentialSubject.toJSON(message.licenseCred)
                : undefined);
        message.userCred !== undefined &&
            (obj.userCred = message.userCred
                ? UserCredentialSubject.toJSON(message.userCred)
                : undefined);
        message.arbitraryCred !== undefined &&
            (obj.arbitraryCred = message.arbitraryCred
                ? ArbitraryCredentialSubject.toJSON(message.arbitraryCred)
                : undefined);
        message.proof !== undefined &&
            (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVerifiableCredential };
        message.context = [];
        message.type = [];
        if (object.context !== undefined && object.context !== null) {
            for (const e of object.context) {
                message.context.push(e);
            }
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.type !== undefined && object.type !== null) {
            for (const e of object.type) {
                message.type.push(e);
            }
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        else {
            message.issuer = "";
        }
        if (object.issuanceDate !== undefined && object.issuanceDate !== null) {
            message.issuanceDate = object.issuanceDate;
        }
        else {
            message.issuanceDate = undefined;
        }
        if (object.regulatorCred !== undefined && object.regulatorCred !== null) {
            message.regulatorCred = RegulatorCredentialSubject.fromPartial(object.regulatorCred);
        }
        else {
            message.regulatorCred = undefined;
        }
        if (object.registrationCred !== undefined &&
            object.registrationCred !== null) {
            message.registrationCred = RegistrationCredentialSubject.fromPartial(object.registrationCred);
        }
        else {
            message.registrationCred = undefined;
        }
        if (object.licenseCred !== undefined && object.licenseCred !== null) {
            message.licenseCred = LicenseCredentialSubject.fromPartial(object.licenseCred);
        }
        else {
            message.licenseCred = undefined;
        }
        if (object.userCred !== undefined && object.userCred !== null) {
            message.userCred = UserCredentialSubject.fromPartial(object.userCred);
        }
        else {
            message.userCred = undefined;
        }
        if (object.arbitraryCred !== undefined && object.arbitraryCred !== null) {
            message.arbitraryCred = ArbitraryCredentialSubject.fromPartial(object.arbitraryCred);
        }
        else {
            message.arbitraryCred = undefined;
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = Proof.fromPartial(object.proof);
        }
        else {
            message.proof = undefined;
        }
        return message;
    },
};
const baseUserCredentialSubject = {
    id: "",
    root: "",
    isVerified: false,
};
export const UserCredentialSubject = {
    encode(message, writer = Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.root !== "") {
            writer.uint32(18).string(message.root);
        }
        if (message.isVerified === true) {
            writer.uint32(24).bool(message.isVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserCredentialSubject };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.root = reader.string();
                    break;
                case 3:
                    message.isVerified = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUserCredentialSubject };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.root !== undefined && object.root !== null) {
            message.root = String(object.root);
        }
        else {
            message.root = "";
        }
        if (object.isVerified !== undefined && object.isVerified !== null) {
            message.isVerified = Boolean(object.isVerified);
        }
        else {
            message.isVerified = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.root !== undefined && (obj.root = message.root);
        message.isVerified !== undefined && (obj.isVerified = message.isVerified);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUserCredentialSubject };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.root !== undefined && object.root !== null) {
            message.root = object.root;
        }
        else {
            message.root = "";
        }
        if (object.isVerified !== undefined && object.isVerified !== null) {
            message.isVerified = object.isVerified;
        }
        else {
            message.isVerified = false;
        }
        return message;
    },
};
const baseLicenseCredentialSubject = {
    id: "",
    licenseType: "",
    country: "",
    authority: "",
};
export const LicenseCredentialSubject = {
    encode(message, writer = Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.licenseType !== "") {
            writer.uint32(18).string(message.licenseType);
        }
        if (message.country !== "") {
            writer.uint32(26).string(message.country);
        }
        if (message.authority !== "") {
            writer.uint32(34).string(message.authority);
        }
        if (message.circulationLimit !== undefined) {
            Coin.encode(message.circulationLimit, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseLicenseCredentialSubject,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.licenseType = reader.string();
                    break;
                case 3:
                    message.country = reader.string();
                    break;
                case 4:
                    message.authority = reader.string();
                    break;
                case 5:
                    message.circulationLimit = Coin.decode(reader, reader.uint32());
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
            ...baseLicenseCredentialSubject,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.licenseType !== undefined && object.licenseType !== null) {
            message.licenseType = String(object.licenseType);
        }
        else {
            message.licenseType = "";
        }
        if (object.country !== undefined && object.country !== null) {
            message.country = String(object.country);
        }
        else {
            message.country = "";
        }
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = String(object.authority);
        }
        else {
            message.authority = "";
        }
        if (object.circulationLimit !== undefined &&
            object.circulationLimit !== null) {
            message.circulationLimit = Coin.fromJSON(object.circulationLimit);
        }
        else {
            message.circulationLimit = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.licenseType !== undefined &&
            (obj.licenseType = message.licenseType);
        message.country !== undefined && (obj.country = message.country);
        message.authority !== undefined && (obj.authority = message.authority);
        message.circulationLimit !== undefined &&
            (obj.circulationLimit = message.circulationLimit
                ? Coin.toJSON(message.circulationLimit)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseLicenseCredentialSubject,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.licenseType !== undefined && object.licenseType !== null) {
            message.licenseType = object.licenseType;
        }
        else {
            message.licenseType = "";
        }
        if (object.country !== undefined && object.country !== null) {
            message.country = object.country;
        }
        else {
            message.country = "";
        }
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        else {
            message.authority = "";
        }
        if (object.circulationLimit !== undefined &&
            object.circulationLimit !== null) {
            message.circulationLimit = Coin.fromPartial(object.circulationLimit);
        }
        else {
            message.circulationLimit = undefined;
        }
        return message;
    },
};
const baseRegulatorCredentialSubject = {
    id: "",
    name: "",
    country: "",
};
export const RegulatorCredentialSubject = {
    encode(message, writer = Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.country !== "") {
            writer.uint32(26).string(message.country);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRegulatorCredentialSubject,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.country = reader.string();
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
            ...baseRegulatorCredentialSubject,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.country !== undefined && object.country !== null) {
            message.country = String(object.country);
        }
        else {
            message.country = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.country !== undefined && (obj.country = message.country);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRegulatorCredentialSubject,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.country !== undefined && object.country !== null) {
            message.country = object.country;
        }
        else {
            message.country = "";
        }
        return message;
    },
};
const baseRegistrationCredentialSubject = { id: "" };
export const RegistrationCredentialSubject = {
    encode(message, writer = Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.address !== undefined) {
            Address.encode(message.address, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.ids) {
            Id.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.legalPersons) {
            LegalPerson.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRegistrationCredentialSubject,
        };
        message.ids = [];
        message.legalPersons = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.address = Address.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.ids.push(Id.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.legalPersons.push(LegalPerson.decode(reader, reader.uint32()));
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
            ...baseRegistrationCredentialSubject,
        };
        message.ids = [];
        message.legalPersons = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = Address.fromJSON(object.address);
        }
        else {
            message.address = undefined;
        }
        if (object.ids !== undefined && object.ids !== null) {
            for (const e of object.ids) {
                message.ids.push(Id.fromJSON(e));
            }
        }
        if (object.legalPersons !== undefined && object.legalPersons !== null) {
            for (const e of object.legalPersons) {
                message.legalPersons.push(LegalPerson.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.address !== undefined &&
            (obj.address = message.address
                ? Address.toJSON(message.address)
                : undefined);
        if (message.ids) {
            obj.ids = message.ids.map((e) => (e ? Id.toJSON(e) : undefined));
        }
        else {
            obj.ids = [];
        }
        if (message.legalPersons) {
            obj.legalPersons = message.legalPersons.map((e) => e ? LegalPerson.toJSON(e) : undefined);
        }
        else {
            obj.legalPersons = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRegistrationCredentialSubject,
        };
        message.ids = [];
        message.legalPersons = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = Address.fromPartial(object.address);
        }
        else {
            message.address = undefined;
        }
        if (object.ids !== undefined && object.ids !== null) {
            for (const e of object.ids) {
                message.ids.push(Id.fromPartial(e));
            }
        }
        if (object.legalPersons !== undefined && object.legalPersons !== null) {
            for (const e of object.legalPersons) {
                message.legalPersons.push(LegalPerson.fromPartial(e));
            }
        }
        return message;
    },
};
const baseLegalPerson = { ctryReg: "" };
export const LegalPerson = {
    encode(message, writer = Writer.create()) {
        for (const v of message.names) {
            Name.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.ctryReg !== "") {
            writer.uint32(18).string(message.ctryReg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLegalPerson };
        message.names = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.names.push(Name.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.ctryReg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLegalPerson };
        message.names = [];
        if (object.names !== undefined && object.names !== null) {
            for (const e of object.names) {
                message.names.push(Name.fromJSON(e));
            }
        }
        if (object.ctryReg !== undefined && object.ctryReg !== null) {
            message.ctryReg = String(object.ctryReg);
        }
        else {
            message.ctryReg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.names) {
            obj.names = message.names.map((e) => (e ? Name.toJSON(e) : undefined));
        }
        else {
            obj.names = [];
        }
        message.ctryReg !== undefined && (obj.ctryReg = message.ctryReg);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLegalPerson };
        message.names = [];
        if (object.names !== undefined && object.names !== null) {
            for (const e of object.names) {
                message.names.push(Name.fromPartial(e));
            }
        }
        if (object.ctryReg !== undefined && object.ctryReg !== null) {
            message.ctryReg = object.ctryReg;
        }
        else {
            message.ctryReg = "";
        }
        return message;
    },
};
const baseName = { name: "", type: "" };
export const Name = {
    encode(message, writer = Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseName };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseName };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseName };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        return message;
    },
};
const baseAddress = {
    addrType: "",
    thfare: "",
    premise: "",
    postcode: "",
    locality: "",
    country: "",
};
export const Address = {
    encode(message, writer = Writer.create()) {
        if (message.addrType !== "") {
            writer.uint32(10).string(message.addrType);
        }
        if (message.thfare !== "") {
            writer.uint32(18).string(message.thfare);
        }
        if (message.premise !== "") {
            writer.uint32(26).string(message.premise);
        }
        if (message.postcode !== "") {
            writer.uint32(34).string(message.postcode);
        }
        if (message.locality !== "") {
            writer.uint32(42).string(message.locality);
        }
        if (message.country !== "") {
            writer.uint32(50).string(message.country);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddress };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addrType = reader.string();
                    break;
                case 2:
                    message.thfare = reader.string();
                    break;
                case 3:
                    message.premise = reader.string();
                    break;
                case 4:
                    message.postcode = reader.string();
                    break;
                case 5:
                    message.locality = reader.string();
                    break;
                case 6:
                    message.country = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAddress };
        if (object.addrType !== undefined && object.addrType !== null) {
            message.addrType = String(object.addrType);
        }
        else {
            message.addrType = "";
        }
        if (object.thfare !== undefined && object.thfare !== null) {
            message.thfare = String(object.thfare);
        }
        else {
            message.thfare = "";
        }
        if (object.premise !== undefined && object.premise !== null) {
            message.premise = String(object.premise);
        }
        else {
            message.premise = "";
        }
        if (object.postcode !== undefined && object.postcode !== null) {
            message.postcode = String(object.postcode);
        }
        else {
            message.postcode = "";
        }
        if (object.locality !== undefined && object.locality !== null) {
            message.locality = String(object.locality);
        }
        else {
            message.locality = "";
        }
        if (object.country !== undefined && object.country !== null) {
            message.country = String(object.country);
        }
        else {
            message.country = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.addrType !== undefined && (obj.addrType = message.addrType);
        message.thfare !== undefined && (obj.thfare = message.thfare);
        message.premise !== undefined && (obj.premise = message.premise);
        message.postcode !== undefined && (obj.postcode = message.postcode);
        message.locality !== undefined && (obj.locality = message.locality);
        message.country !== undefined && (obj.country = message.country);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAddress };
        if (object.addrType !== undefined && object.addrType !== null) {
            message.addrType = object.addrType;
        }
        else {
            message.addrType = "";
        }
        if (object.thfare !== undefined && object.thfare !== null) {
            message.thfare = object.thfare;
        }
        else {
            message.thfare = "";
        }
        if (object.premise !== undefined && object.premise !== null) {
            message.premise = object.premise;
        }
        else {
            message.premise = "";
        }
        if (object.postcode !== undefined && object.postcode !== null) {
            message.postcode = object.postcode;
        }
        else {
            message.postcode = "";
        }
        if (object.locality !== undefined && object.locality !== null) {
            message.locality = object.locality;
        }
        else {
            message.locality = "";
        }
        if (object.country !== undefined && object.country !== null) {
            message.country = object.country;
        }
        else {
            message.country = "";
        }
        return message;
    },
};
const baseId = { id: "", type: "" };
export const Id = {
    encode(message, writer = Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseId };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseId };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseId };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        return message;
    },
};
const baseArbitraryCredentialSubject = { id: "", type: "" };
export const ArbitraryCredentialSubject = {
    encode(message, writer = Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.attributes.length !== 0) {
            writer.uint32(26).bytes(message.attributes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseArbitraryCredentialSubject,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.attributes = reader.bytes();
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
            ...baseArbitraryCredentialSubject,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            message.attributes = bytesFromBase64(object.attributes);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        message.attributes !== undefined &&
            (obj.attributes = base64FromBytes(message.attributes !== undefined ? message.attributes : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseArbitraryCredentialSubject,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            message.attributes = object.attributes;
        }
        else {
            message.attributes = new Uint8Array();
        }
        return message;
    },
};
const baseProof = {
    type: "",
    created: "",
    proofPurpose: "",
    verificationMethod: "",
    signature: "",
};
export const Proof = {
    encode(message, writer = Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.created !== "") {
            writer.uint32(18).string(message.created);
        }
        if (message.proofPurpose !== "") {
            writer.uint32(26).string(message.proofPurpose);
        }
        if (message.verificationMethod !== "") {
            writer.uint32(34).string(message.verificationMethod);
        }
        if (message.signature !== "") {
            writer.uint32(42).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProof };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.created = reader.string();
                    break;
                case 3:
                    message.proofPurpose = reader.string();
                    break;
                case 4:
                    message.verificationMethod = reader.string();
                    break;
                case 5:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseProof };
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.created !== undefined && object.created !== null) {
            message.created = String(object.created);
        }
        else {
            message.created = "";
        }
        if (object.proofPurpose !== undefined && object.proofPurpose !== null) {
            message.proofPurpose = String(object.proofPurpose);
        }
        else {
            message.proofPurpose = "";
        }
        if (object.verificationMethod !== undefined &&
            object.verificationMethod !== null) {
            message.verificationMethod = String(object.verificationMethod);
        }
        else {
            message.verificationMethod = "";
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = String(object.signature);
        }
        else {
            message.signature = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.created !== undefined && (obj.created = message.created);
        message.proofPurpose !== undefined &&
            (obj.proofPurpose = message.proofPurpose);
        message.verificationMethod !== undefined &&
            (obj.verificationMethod = message.verificationMethod);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseProof };
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.created !== undefined && object.created !== null) {
            message.created = object.created;
        }
        else {
            message.created = "";
        }
        if (object.proofPurpose !== undefined && object.proofPurpose !== null) {
            message.proofPurpose = object.proofPurpose;
        }
        else {
            message.proofPurpose = "";
        }
        if (object.verificationMethod !== undefined &&
            object.verificationMethod !== null) {
            message.verificationMethod = object.verificationMethod;
        }
        else {
            message.verificationMethod = "";
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = object.signature;
        }
        else {
            message.signature = "";
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(""));
}
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
