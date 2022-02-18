import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "allinbits.cosmoscash.verifiablecredential";
/** VerifiableCredential represents a verifiable credential */
export interface VerifiableCredential {
    /** @context is spec for verifiable credential. */
    context: string[];
    /**
     * The value of the id property MUST be a single URI. It is RECOMMENDED
     * that the URI in the id be one which, if dereferenced, results in a
     * document containing machine-readable information about the id.
     */
    id: string;
    /**
     * The value of the type property MUST be, or map to (through interpretation
     * of the @context property), one or more URIs. If more than one URI is
     * provided, the URIs MUST be interpreted as an unordered set.
     */
    type: string[];
    /**
     * The value of the issuer property MUST be either a URI or an object
     * containing an id property. It is RECOMMENDED that the URI in the issuer
     * or its id be one which, if dereferenced, results in a document containing
     * machine-readable information about the issuer that can be used to verify
     * the information expressed in the credential.
     */
    issuer: string;
    /**
     * A credential MUST have an issuanceDate property. The value of the issuanceDate
     * property MUST be a string value of an [RFC3339] combined date and time string
     * representing the date and time the credential becomes valid, which could
     * be a date and time in the future. Note that this value represents the earliest
     * point in time at which the information associated with the credentialSubject
     * property becomes valid.
     */
    issuanceDate: Date | undefined;
    /** RegulatorCredentialSubject represents a credential that identify a financial regulator */
    regulatorCred: RegulatorCredentialSubject | undefined;
    /**
     * The value of license_cred represents a registration issued by a regulatory
     * body. The license is used to describe the entity that require a license.
     */
    registrationCred: RegistrationCredentialSubject | undefined;
    /**
     * The value of license_cred represents a license issued by a regulatory
     * body. The license can be used to define authorized actions by the
     * credential subject
     */
    licenseCred: LicenseCredentialSubject | undefined;
    /**
     * The value of user_cred represents a privacy respecting verifiable
     * credential. This is used when adding sensitive information about
     * a credential subject. It allows the credential subject to create
     * and validate proofs about what is contained in a credential without
     * revealing the values contained in the credential otherwise known as
     * selective disclosure.
     */
    userCred: UserCredentialSubject | undefined;
    /**
     * One or more cryptographic proofs that can be used to detect tampering
     * and verify the authorship of a credential or presentation. The specific
     * method used for an embedded proof MUST be included using the type property.
     */
    proof: Proof | undefined;
}
/**
 * UserCredentialSubject represents a privacy respecting
 * credential_subject of a verifiable credential. This
 * is used as an on chain verifiable credential.
 */
export interface UserCredentialSubject {
    id: string;
    root: string;
    isVerified: boolean;
}
/**
 * The LicenseCredential message makes reference to the classes of crypto assets
 * described in MiCA, but the license could easily be adopted as proof of
 * authority to issue various types of crypto or virtual assets. The LicenseCredential
 * is used a a credential_subject in a verifiable credential.
 */
export interface LicenseCredentialSubject {
    /** The value of id represents the ID of the credential_subject */
    id: string;
    /**
     * The license type is defined by the MICA regulation. This will
     * be used to identify different asset classes of tokens being issuedi
     * by the credential_subject.
     */
    licenseType: string;
    /** The country field represents the country the credential was issued in. */
    country: string;
    /** The authority field represents a licensing authority that issued the LicenseCredential */
    authority: string;
    /**
     * The circulation_limit represents the amount of a token
     * that can be minted by a credential_subject.
     */
    circulationLimit: Coin | undefined;
}
/** RegulatorCredentialSubject is used to identify regulators */
export interface RegulatorCredentialSubject {
    /** The value of id represents the ID of the credential_subject */
    id: string;
    /** The value of id represents the name of the credential subject */
    name: string;
    /** The country field represents the country the credential was issued in. */
    country: string;
}
/**
 * RegistrationCredentialSubject is used to identify a business entity
 * https://github.com/allinbits/cosmos-cash/v3/blob/main/docs/Explanation/ADR/adr-005-registration-credential.md
 */
export interface RegistrationCredentialSubject {
    /** The value of id represents the ID of the credential_subject */
    id: string;
    address: Address | undefined;
    ids: Id[];
    legalPersons: LegalPerson[];
}
export interface LegalPerson {
    names: Name[];
    ctryReg: string;
}
export interface Name {
    name: string;
    type: string;
}
export interface Address {
    addrType: string;
    thfare: string;
    premise: string;
    postcode: string;
    locality: string;
    country: string;
}
export interface Id {
    id: string;
    type: string;
}
/**
 * The Proof message represents a cryptographic proof that the
 * credential has not been tampered with or changed without the issuersi
 * knowledge. This can be used to verify the verifiable credential.
 */
export interface Proof {
    type: string;
    created: string;
    proofPurpose: string;
    verificationMethod: string;
    signature: string;
}
export declare const VerifiableCredential: {
    encode(message: VerifiableCredential, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): VerifiableCredential;
    fromJSON(object: any): VerifiableCredential;
    toJSON(message: VerifiableCredential): unknown;
    fromPartial(object: DeepPartial<VerifiableCredential>): VerifiableCredential;
};
export declare const UserCredentialSubject: {
    encode(message: UserCredentialSubject, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): UserCredentialSubject;
    fromJSON(object: any): UserCredentialSubject;
    toJSON(message: UserCredentialSubject): unknown;
    fromPartial(object: DeepPartial<UserCredentialSubject>): UserCredentialSubject;
};
export declare const LicenseCredentialSubject: {
    encode(message: LicenseCredentialSubject, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): LicenseCredentialSubject;
    fromJSON(object: any): LicenseCredentialSubject;
    toJSON(message: LicenseCredentialSubject): unknown;
    fromPartial(object: DeepPartial<LicenseCredentialSubject>): LicenseCredentialSubject;
};
export declare const RegulatorCredentialSubject: {
    encode(message: RegulatorCredentialSubject, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): RegulatorCredentialSubject;
    fromJSON(object: any): RegulatorCredentialSubject;
    toJSON(message: RegulatorCredentialSubject): unknown;
    fromPartial(object: DeepPartial<RegulatorCredentialSubject>): RegulatorCredentialSubject;
};
export declare const RegistrationCredentialSubject: {
    encode(message: RegistrationCredentialSubject, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): RegistrationCredentialSubject;
    fromJSON(object: any): RegistrationCredentialSubject;
    toJSON(message: RegistrationCredentialSubject): unknown;
    fromPartial(object: DeepPartial<RegistrationCredentialSubject>): RegistrationCredentialSubject;
};
export declare const LegalPerson: {
    encode(message: LegalPerson, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): LegalPerson;
    fromJSON(object: any): LegalPerson;
    toJSON(message: LegalPerson): unknown;
    fromPartial(object: DeepPartial<LegalPerson>): LegalPerson;
};
export declare const Name: {
    encode(message: Name, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Name;
    fromJSON(object: any): Name;
    toJSON(message: Name): unknown;
    fromPartial(object: DeepPartial<Name>): Name;
};
export declare const Address: {
    encode(message: Address, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Address;
    fromJSON(object: any): Address;
    toJSON(message: Address): unknown;
    fromPartial(object: DeepPartial<Address>): Address;
};
export declare const Id: {
    encode(message: Id, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Id;
    fromJSON(object: any): Id;
    toJSON(message: Id): unknown;
    fromPartial(object: DeepPartial<Id>): Id;
};
export declare const Proof: {
    encode(message: Proof, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Proof;
    fromJSON(object: any): Proof;
    toJSON(message: Proof): unknown;
    fromPartial(object: DeepPartial<Proof>): Proof;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
