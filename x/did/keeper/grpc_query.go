package keeper

import (
	"context"
	"encoding/base64"
	"encoding/json"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/allinbits/cosmos-cash/v3/x/did/types"
)

type OwnerOf struct {
	TokenId string `json:"token_id"`
}
type OwnerOfQueryRequest struct {
	OwnerOf OwnerOf `json:"owner_of"`
}
type OwnerOfQueryResponse struct {
	Owner string `json:"owner"`
}

var _ types.QueryServer = Keeper{}

// DidDocuments implements the DidDocuments gRPC method
func (k Keeper) DidDocuments(
	c context.Context,
	req *types.QueryDidDocumentsRequest,
) (*types.QueryDidDocumentsResponse, error) {
	ctx := sdk.UnwrapSDKContext(c)
	dids := k.GetAllDidDocuments(ctx)

	return &types.QueryDidDocumentsResponse{
		DidDocuments: dids,
	}, nil
}

// DidDocument implements the DidDocument gRPC method
func (k Keeper) DidDocument(
	c context.Context,
	req *types.QueryDidDocumentRequest,
) (*types.QueryDidDocumentResponse, error) {
	if req.Id == "" {
		return nil, status.Error(codes.InvalidArgument, "verifiable credential id cannot be empty")
	}

	ctx := sdk.UnwrapSDKContext(c)
	doc, meta, err := k.ResolveDid(ctx, types.DID(req.Id))
	if err != nil {
		return nil, status.Error(codes.NotFound, err.Error())
	}
	return &types.QueryDidDocumentResponse{
		DidDocument: doc,
		DidMetadata: meta,
	}, nil
}

// DidDocumentB64 implements the DidDocumentB64 gRPC method
func (k Keeper) DidDocumentB64(c context.Context, req *types.QueryDidDocumentB64Request) (*types.QueryDidDocumentB64Response, error) {
	did_bytes, err := base64.URLEncoding.DecodeString(req.IdBase64)
	if err != nil {
		return nil, status.Error(codes.InvalidArgument, "DID must be url-compatible Base64 encoded")
	}

	did_str := string(did_bytes)

	did_tokens := strings.Split(did_str, ":")
	if len(did_tokens) < 3 {
		return nil, status.Error(codes.InvalidArgument, "DID must conform to W3C DID standards (https://www.w3.org/TR/did-core/#did-syntax)")
	}
	method := did_tokens[1]

	ctx := sdk.UnwrapSDKContext(c)

	switch method {
	case "cosmos":
		doc, meta, err := k.ResolveDid(ctx, types.DID(did_bytes))
		if err != nil {
			return nil, status.Error(codes.NotFound, err.Error())
		}
		return &types.QueryDidDocumentB64Response{
			DidDocument: doc,
			DidMetadata: meta,
		}, nil

	case "nft":
		id_tokens := strings.Split(did_tokens[2], "_")
		if len(id_tokens) < 2 {
			return nil, status.Error(codes.InvalidArgument, "DIDs with 'nft' method must be in format '{contract_address}_{token_id}'")
		}

		c_addr, err := sdk.AccAddressFromBech32(id_tokens[0])
		if err != nil {
			return nil, status.Error(codes.InvalidArgument, err.Error())
		}

		req, err := json.Marshal(OwnerOfQueryRequest{
			OwnerOf: OwnerOf{
				TokenId: id_tokens[1],
			},
		})
		if err != nil {
			return nil, status.Error(codes.Internal, "Failed JSON request: "+err.Error())
		}

		res_bytes, err := k.wasmKeeper.QuerySmart(ctx, c_addr, req)
		if err != nil {
			return nil, status.Error(codes.Internal, "Failed contract query: "+err.Error())
		}

		var res OwnerOfQueryResponse
		err = json.Unmarshal(res_bytes, &res)
		if err != nil {
			return nil, status.Error(codes.Internal, "Failed to unmarshal contract response: "+err.Error())
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

		return &types.QueryDidDocumentB64Response{
			DidDocument: doc,
			DidMetadata: types.DidMetadata{},
		}, nil

	default:
		return nil, status.Error(codes.InvalidArgument, "DID method must be one of 'cosmos' or 'nft'")
	}
}
