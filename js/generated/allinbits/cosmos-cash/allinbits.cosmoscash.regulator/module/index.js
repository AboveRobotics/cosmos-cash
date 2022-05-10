// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgIssueLicenseCredential } from "./types/regulator/tx";
import { MsgIssueRegulatorCredential } from "./types/regulator/tx";
import { MsgIssueRegistrationCredential } from "./types/regulator/tx";
const types = [
    ["/allinbits.cosmoscash.regulator.MsgIssueLicenseCredential", MsgIssueLicenseCredential],
    ["/allinbits.cosmoscash.regulator.MsgIssueRegulatorCredential", MsgIssueRegulatorCredential],
    ["/allinbits.cosmoscash.regulator.MsgIssueRegistrationCredential", MsgIssueRegistrationCredential],
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
        msgIssueLicenseCredential: (data) => ({ typeUrl: "/allinbits.cosmoscash.regulator.MsgIssueLicenseCredential", value: MsgIssueLicenseCredential.fromPartial(data) }),
        msgIssueRegulatorCredential: (data) => ({ typeUrl: "/allinbits.cosmoscash.regulator.MsgIssueRegulatorCredential", value: MsgIssueRegulatorCredential.fromPartial(data) }),
        msgIssueRegistrationCredential: (data) => ({ typeUrl: "/allinbits.cosmoscash.regulator.MsgIssueRegistrationCredential", value: MsgIssueRegistrationCredential.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
