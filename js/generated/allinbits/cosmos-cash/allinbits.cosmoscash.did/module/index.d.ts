import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgAddService } from "./types/did/tx";
import { MsgCreateDidDocument } from "./types/did/tx";
import { MsgDeleteController } from "./types/did/tx";
import { MsgAddVerification } from "./types/did/tx";
import { MsgUpdateDidDocument } from "./types/did/tx";
import { MsgSetVerificationRelationships } from "./types/did/tx";
import { MsgDeleteService } from "./types/did/tx";
import { MsgAddController } from "./types/did/tx";
import { MsgRevokeVerification } from "./types/did/tx";
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
    msgAddService: (data: MsgAddService) => EncodeObject;
    msgCreateDidDocument: (data: MsgCreateDidDocument) => EncodeObject;
    msgDeleteController: (data: MsgDeleteController) => EncodeObject;
    msgAddVerification: (data: MsgAddVerification) => EncodeObject;
    msgUpdateDidDocument: (data: MsgUpdateDidDocument) => EncodeObject;
    msgSetVerificationRelationships: (data: MsgSetVerificationRelationships) => EncodeObject;
    msgDeleteService: (data: MsgDeleteService) => EncodeObject;
    msgAddController: (data: MsgAddController) => EncodeObject;
    msgRevokeVerification: (data: MsgRevokeVerification) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
