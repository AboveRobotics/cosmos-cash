import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMintToken } from "./types/issuer/tx";
import { MsgPauseToken } from "./types/issuer/tx";
import { MsgCreateIssuer } from "./types/issuer/tx";
import { MsgBurnToken } from "./types/issuer/tx";
import { MsgIssueUserCredential } from "./types/issuer/tx";
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
    msgMintToken: (data: MsgMintToken) => EncodeObject;
    msgPauseToken: (data: MsgPauseToken) => EncodeObject;
    msgCreateIssuer: (data: MsgCreateIssuer) => EncodeObject;
    msgBurnToken: (data: MsgBurnToken) => EncodeObject;
    msgIssueUserCredential: (data: MsgIssueUserCredential) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
