package keeper

import (
	"context"
	"encoding/base64"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/allinbits/cosmos-cash/v3/x/did/types"
)

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

	ctx := sdk.UnwrapSDKContext(c)
	doc, meta, err := k.ResolveDid(ctx, types.DID(did_bytes))
	if err != nil {
		return nil, status.Error(codes.NotFound, err.Error())
	}
	return &types.QueryDidDocumentB64Response{
		DidDocument: doc,
		DidMetadata: meta,
	}, nil
}
