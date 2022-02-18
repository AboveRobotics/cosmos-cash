import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgIssueLicenseCredential } from "./types/regulator/tx";
import { MsgIssueRegistrationCredential } from "./types/regulator/tx";
import { MsgIssueRegulatorCredential } from "./types/regulator/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgIssueLicenseCredential: (data: MsgIssueLicenseCredential) => EncodeObject;
    msgIssueRegistrationCredential: (data: MsgIssueRegistrationCredential) => EncodeObject;
    msgIssueRegulatorCredential: (data: MsgIssueRegulatorCredential) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
