package cli

import (
	"context"
	"fmt"
	//"strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	//sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/allinbits/cosmos-cash/x/verifiable-credential-service/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group verifiable-credential-service queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	// this line is used by starport scaffolding # 1
	cmd.AddCommand(
		GetCmdQueryVerifiableCredentials(),
		GetCmdQueryVerifiableCredential(),
		GetCmdQueryValidateVerifiableCredential(),
	)

	return cmd
}

func GetCmdQueryVerifiableCredentials() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "verifiable-credentials",
		Short: "Query for all verifiable credentials",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := types.NewQueryClient(clientCtx)
			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			result, err := queryClient.VerifiableCredentials(
				context.Background(),
				&types.QueryVerifiableCredentialsRequest{
					Pagination: pageReq,
				},
			)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(result)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

// GetCmdQueryVerifiableCredential implements the VerifiableCredential query command.
func GetCmdQueryVerifiableCredential() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "verifiable-credential [verifiable-credential-id]",
		Short: "Query a verifiable-credential",
		Long:  fmt.Sprintf(`Query details about an individual verifiable-credential.`),
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryVerifiableCredentialRequest{VerifiableCredentialId: args[0]}
			res, err := queryClient.VerifiableCredential(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(&res.VerifiableCredential)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

// GetCmdQueryVerifiableCredential implements the VerifiableCredential query command.
func GetCmdQueryValidateVerifiableCredential() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "validate-verifiable-credential [verifiable-credential-id] [pubkey]",
		Short: "Validate a verifiable-credential",
		Long:  fmt.Sprintf(`Validate proof for an individual verifiable-credential.`),
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryValidateVerifiableCredentialRequest{
				VerifiableCredentialId: args[0],
				IssuerPubkey:           args[1],
			}
			res, err := queryClient.ValidateVerifiableCredential(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
