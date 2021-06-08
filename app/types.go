package app

import (
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/server/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	abci "github.com/tendermint/tendermint/abci/types"
)

// CosmosApp implements the common methods for a Cosmos SDK-based application
// specific blockchain.
type CosmosApp interface {
	// Name return the assigned name of the app.
	Name() string

	// LegacyAmino returns the legacy amino coded
	// NOTE: This should be sealed before being returned.
	LegacyAmino() *codec.LegacyAmino

	// BeginBlocker Application updates every begin block.
	BeginBlocker(ctx sdk.Context, req abci.RequestBeginBlock) abci.ResponseBeginBlock

	// EndBlocker Application updates every end block.
	EndBlocker(ctx sdk.Context, req abci.RequestEndBlock) abci.ResponseEndBlock

	// InitChainer Application update at chain (i.e app) initialization.
	InitChainer(ctx sdk.Context, req abci.RequestInitChain) abci.ResponseInitChain

	// LoadHeight Loads the app at a given height.
	LoadHeight(height int64) error

	// ExportAppStateAndValidators Exports the state of the application for a genesis file.
	ExportAppStateAndValidators(
		forZeroHeight bool, jailAllowedAddrs []string,
	) (types.ExportedApp, error)

	// ModuleAccountAddrs All the registered module account addresses.
	ModuleAccountAddrs() map[string]bool
}
