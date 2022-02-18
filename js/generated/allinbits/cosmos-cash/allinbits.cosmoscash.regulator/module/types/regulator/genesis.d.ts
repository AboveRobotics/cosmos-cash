import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "allinbits.cosmoscash.regulator";
/** GenesisState defines the regulator module's genesis state. */
export interface GenesisState {
    /**
     * this line is used by starport scaffolding # genesis/proto/state
     * this line is used by starport scaffolding # ibc/genesis/proto
     */
    regulators: Regulators | undefined;
}
/** RegulatorsParams defines the addresses of the regulators */
export interface Regulators {
    /**
     * the addresses of the regualtors for the chain. The addresses will be used to
     * generate DID documents at genesis.
     */
    addresses: string[];
    /**
     * DIDs is a map that is filled at init gensis time and contains:
     * <regulator address, generated uuid did>
     */
    dids: {
        [key: string]: string;
    };
}
export interface Regulators_DidsEntry {
    key: string;
    value: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const Regulators: {
    encode(message: Regulators, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Regulators;
    fromJSON(object: any): Regulators;
    toJSON(message: Regulators): unknown;
    fromPartial(object: DeepPartial<Regulators>): Regulators;
};
export declare const Regulators_DidsEntry: {
    encode(message: Regulators_DidsEntry, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Regulators_DidsEntry;
    fromJSON(object: any): Regulators_DidsEntry;
    toJSON(message: Regulators_DidsEntry): unknown;
    fromPartial(object: DeepPartial<Regulators_DidsEntry>): Regulators_DidsEntry;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
