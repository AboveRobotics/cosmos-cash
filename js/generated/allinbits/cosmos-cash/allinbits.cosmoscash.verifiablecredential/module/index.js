// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgIssueCredential } from "./types/verifiable-credential/tx";
import { MsgRevokeCredential } from "./types/verifiable-credential/tx";
const types = [
    ["/allinbits.cosmoscash.verifiablecredential.MsgIssueCredential", MsgIssueCredential],
    ["/allinbits.cosmoscash.verifiablecredential.MsgRevokeCredential", MsgRevokeCredential],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgIssueCredential: (data) => ({ typeUrl: "/allinbits.cosmoscash.verifiablecredential.MsgIssueCredential", value: MsgIssueCredential.fromPartial(data) }),
        msgRevokeCredential: (data) => ({ typeUrl: "/allinbits.cosmoscash.verifiablecredential.MsgRevokeCredential", value: MsgRevokeCredential.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
