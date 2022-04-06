package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

type QueryingWasmKeeper interface {
	QuerySmart(ctx sdk.Context, contractAddr sdk.AccAddress, req []byte) ([]byte, error)
}
