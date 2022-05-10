// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMintToken } from "./types/issuer/tx";
import { MsgPauseToken } from "./types/issuer/tx";
import { MsgCreateIssuer } from "./types/issuer/tx";
import { MsgBurnToken } from "./types/issuer/tx";
import { MsgIssueUserCredential } from "./types/issuer/tx";
const types = [
    ["/allinbits.cosmoscash.issuer.MsgMintToken", MsgMintToken],
    ["/allinbits.cosmoscash.issuer.MsgPauseToken", MsgPauseToken],
    ["/allinbits.cosmoscash.issuer.MsgCreateIssuer", MsgCreateIssuer],
    ["/allinbits.cosmoscash.issuer.MsgBurnToken", MsgBurnToken],
    ["/allinbits.cosmoscash.issuer.MsgIssueUserCredential", MsgIssueUserCredential],
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
        msgMintToken: (data) => ({ typeUrl: "/allinbits.cosmoscash.issuer.MsgMintToken", value: MsgMintToken.fromPartial(data) }),
        msgPauseToken: (data) => ({ typeUrl: "/allinbits.cosmoscash.issuer.MsgPauseToken", value: MsgPauseToken.fromPartial(data) }),
        msgCreateIssuer: (data) => ({ typeUrl: "/allinbits.cosmoscash.issuer.MsgCreateIssuer", value: MsgCreateIssuer.fromPartial(data) }),
        msgBurnToken: (data) => ({ typeUrl: "/allinbits.cosmoscash.issuer.MsgBurnToken", value: MsgBurnToken.fromPartial(data) }),
        msgIssueUserCredential: (data) => ({ typeUrl: "/allinbits.cosmoscash.issuer.MsgIssueUserCredential", value: MsgIssueUserCredential.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
