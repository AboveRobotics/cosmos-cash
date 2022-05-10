package keeper

import (
	"encoding/json"
	"strings"

	"github.com/cosmos/cosmos-sdk/codec"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/allinbits/cosmos-cash/v3/x/did/types"
)

func (k Keeper) SetDidDocument(ctx sdk.Context, key []byte, document types.DidDocument) {
	k.Set(ctx, key, types.DidDocumentKey, document, k.Marshal)
}

func (k Keeper) GetDidDocument(ctx sdk.Context, key []byte) (types.DidDocument, bool) {
	val, found := k.Get(ctx, key, types.DidDocumentKey, k.UnmarshalDidDocument)
	return val.(types.DidDocument), found
}

// UnmarshalDidDocument unmarshall a did document= and check if it is empty
// ad DID document is empty if contains no context
func (k Keeper) UnmarshalDidDocument(value []byte) (interface{}, bool) {
	data := types.DidDocument{}
	k.Unmarshal(value, &data)
	return data, types.IsValidDIDDocument(&data)
}

func (k Keeper) SetDidMetadata(ctx sdk.Context, key []byte, meta types.DidMetadata) {
	k.Set(ctx, key, types.DidMetadataKey, meta, k.Marshal)
}

func (k Keeper) GetDidMetadata(ctx sdk.Context, key []byte) (types.DidMetadata, bool) {
	val, found := k.Get(ctx, key, types.DidMetadataKey, k.UnmarshalDidMetadata)
	return val.(types.DidMetadata), found
}

func (k Keeper) UnmarshalDidMetadata(value []byte) (interface{}, bool) {
	data := types.DidMetadata{}
	k.Unmarshal(value, &data)
	return data, types.IsValidDIDMetadata(&data)
}

// ResolveDid returning the did document and associated metadata
func (k Keeper) ResolveDid(ctx sdk.Context, did types.DID) (types.DidDocument, types.DidMetadata, error) {
	if strings.HasPrefix(did.String(), types.DidKeyPrefix) {
		doc, meta, err := types.ResolveAccountDID(did.String(), ctx.ChainID())
		return doc, meta, err
	}

	did_str := string(did)

	did_tokens := strings.Split(did_str, ":")
	if len(did_tokens) < 3 {
		err := status.Error(codes.InvalidArgument, "DID must conform to W3C DID standards (https://www.w3.org/TR/did-core/#did-syntax)")
		return types.DidDocument{}, types.DidMetadata{}, err
	}
	method := did_tokens[1]

	switch method {
	case "cosmos":
		doc, found := k.GetDidDocument(ctx, []byte(did.String()))
		if !found {
			return types.DidDocument{}, types.DidMetadata{}, types.ErrDidDocumentNotFound
		}
		meta, _ := k.GetDidMetadata(ctx, []byte(did.String()))
		return doc, meta, nil
	case "nft":
		id_tokens := strings.Split(did_tokens[2], "_")
		if len(id_tokens) < 2 {
			err := status.Error(codes.InvalidArgument, "DIDs with 'nft' method must be in format '{contract_address}_{token_id}'")
			return types.DidDocument{}, types.DidMetadata{}, err
		}

		c_addr, err := sdk.AccAddressFromBech32(id_tokens[0])
		if err != nil {
			err = status.Error(codes.InvalidArgument, err.Error())
			return types.DidDocument{}, types.DidMetadata{}, err
		}

		req, err := json.Marshal(OwnerOfQueryRequest{
			OwnerOf: OwnerOf{
				TokenId: id_tokens[1],
			},
		})
		if err != nil {
			return types.DidDocument{}, types.DidMetadata{}, status.Error(codes.Internal, "Failed JSON request: "+err.Error())
		}

		res_bytes, err := k.wasmKeeper.QuerySmart(ctx, c_addr, req)
		if err != nil {
			return types.DidDocument{}, types.DidMetadata{}, status.Error(codes.Internal, "Failed contract query: "+err.Error())
		}

		var res OwnerOfQueryResponse
		err = json.Unmarshal(res_bytes, &res)
		if err != nil {
			return types.DidDocument{}, types.DidMetadata{}, status.Error(codes.Internal, "Failed to unmarshal contract response: "+err.Error())
		}

		doc := types.DidDocument{
			Id:         did_str,
			Context:    []string{"https://www.w3.org/ns/did/v1"},
			Controller: []string{"did:cosmos:" + res.Owner},
			VerificationMethod: []*types.VerificationMethod{
				{
					Id:         did_str + "#owner",
					Type:       "BlockchainVerificationMethod2021",
					Controller: did_str,
					VerificationMaterial: &types.VerificationMethod_BlockchainAccountID{
						BlockchainAccountID: res.Owner,
					},
				},
			},
		}

		return doc, types.DidMetadata{}, nil
	default:
		return types.DidDocument{}, types.DidMetadata{}, status.Error(codes.InvalidArgument, "DID method must be one of 'cosmos' or 'nft'")
	}
}

func (k Keeper) Marshal(value interface{}) (bytes []byte) {
	switch value := value.(type) {
	case types.DidDocument:
		bytes = k.cdc.MustMarshal(&value)
	case types.DidMetadata:
		bytes = k.cdc.MustMarshal(&value)
	}
	return
}

// Unmarshal unmarshal a byte slice to a struct, return false in case of errors
func (k Keeper) Unmarshal(data []byte, val codec.ProtoMarshaler) bool {
	if len(data) == 0 {
		return false
	}
	if err := k.cdc.Unmarshal(data, val); err != nil {
		return false
	}
	return true
}

// GetAllDidDocumentsWithCondition retrieve a list of
// did document by some arbitrary criteria. The selector filter has access
// to both the did and its metadata
func (k Keeper) GetAllDidDocumentsWithCondition(
	ctx sdk.Context,
	key []byte,
	didSelector func(did types.DidDocument) bool,
) (didDocs []types.DidDocument) {
	iterator := k.GetAll(ctx, key)

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		did, _ := k.UnmarshalDidDocument(iterator.Value())
		didTyped := did.(types.DidDocument)

		if didSelector(didTyped) {
			didDocs = append(didDocs, didTyped)
		}
	}

	return didDocs
}

// GetAllDidDocuments returns all the DidDocuments
func (k Keeper) GetAllDidDocuments(ctx sdk.Context) []types.DidDocument {
	return k.GetAllDidDocumentsWithCondition(
		ctx,
		types.DidDocumentKey,
		func(did types.DidDocument) bool { return true },
	)
}

// GetDidDocumentsByPubKey retrieve a did document using a pubkey associated to the DID
// TODO: this function is used only in the issuer module ante handler !
func (k Keeper) GetDidDocumentsByPubKey(ctx sdk.Context, pubkey cryptotypes.PubKey) (dids []types.DidDocument) {

	dids = k.GetAllDidDocumentsWithCondition(
		ctx,
		types.DidDocumentKey,
		func(did types.DidDocument) bool {
			return did.HasPublicKey(pubkey)
		},
	)
	// compute the key did

	// generate the address
	addr, err := sdk.Bech32ifyAddressBytes(sdk.GetConfig().GetBech32AccountAddrPrefix(), pubkey.Address())
	if err != nil {
		return
	}
	doc, _, err := types.ResolveAccountDID(types.NewKeyDID(addr).String(), ctx.ChainID())
	if err != nil {
		return
	}
	dids = append(dids, doc)
	return
}
