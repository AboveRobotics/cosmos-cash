// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgAddController } from "./types/did/tx";
import { MsgUpdateDidDocument } from "./types/did/tx";
import { MsgRevokeVerification } from "./types/did/tx";
import { MsgSetVerificationRelationships } from "./types/did/tx";
import { MsgCreateDidDocument } from "./types/did/tx";
import { MsgAddService } from "./types/did/tx";
import { MsgDeleteService } from "./types/did/tx";
import { MsgAddVerification } from "./types/did/tx";
import { MsgDeleteController } from "./types/did/tx";


const types = [
  ["/allinbits.cosmoscash.did.MsgAddController", MsgAddController],
  ["/allinbits.cosmoscash.did.MsgUpdateDidDocument", MsgUpdateDidDocument],
  ["/allinbits.cosmoscash.did.MsgRevokeVerification", MsgRevokeVerification],
  ["/allinbits.cosmoscash.did.MsgSetVerificationRelationships", MsgSetVerificationRelationships],
  ["/allinbits.cosmoscash.did.MsgCreateDidDocument", MsgCreateDidDocument],
  ["/allinbits.cosmoscash.did.MsgAddService", MsgAddService],
  ["/allinbits.cosmoscash.did.MsgDeleteService", MsgDeleteService],
  ["/allinbits.cosmoscash.did.MsgAddVerification", MsgAddVerification],
  ["/allinbits.cosmoscash.did.MsgDeleteController", MsgDeleteController],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgAddController: (data: MsgAddController): EncodeObject => ({ typeUrl: "/allinbits.cosmoscash.did.MsgAddController", value: MsgAddController.fromPartial( data ) }),
    msgUpdateDidDocument: (data: MsgUpdateDidDocument): EncodeObject => ({ typeUrl: "/allinbits.cosmoscash.did.MsgUpdateDidDocument", value: MsgUpdateDidDocument.fromPartial( data ) }),
    msgRevokeVerification: (data: MsgRevokeVerification): EncodeObject => ({ typeUrl: "/allinbits.cosmoscash.did.MsgRevokeVerification", value: MsgRevokeVerification.fromPartial( data ) }),
    msgSetVerificationRelationships: (data: MsgSetVerificationRelationships): EncodeObject => ({ typeUrl: "/allinbits.cosmoscash.did.MsgSetVerificationRelationships", value: MsgSetVerificationRelationships.fromPartial( data ) }),
    msgCreateDidDocument: (data: MsgCreateDidDocument): EncodeObject => ({ typeUrl: "/allinbits.cosmoscash.did.MsgCreateDidDocument", value: MsgCreateDidDocument.fromPartial( data ) }),
    msgAddService: (data: MsgAddService): EncodeObject => ({ typeUrl: "/allinbits.cosmoscash.did.MsgAddService", value: MsgAddService.fromPartial( data ) }),
    msgDeleteService: (data: MsgDeleteService): EncodeObject => ({ typeUrl: "/allinbits.cosmoscash.did.MsgDeleteService", value: MsgDeleteService.fromPartial( data ) }),
    msgAddVerification: (data: MsgAddVerification): EncodeObject => ({ typeUrl: "/allinbits.cosmoscash.did.MsgAddVerification", value: MsgAddVerification.fromPartial( data ) }),
    msgDeleteController: (data: MsgDeleteController): EncodeObject => ({ typeUrl: "/allinbits.cosmoscash.did.MsgDeleteController", value: MsgDeleteController.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
