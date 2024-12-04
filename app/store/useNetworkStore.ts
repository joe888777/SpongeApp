/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from "zustand";
import { IDL as solanaIDL } from '@/program/solana_vault';
import { IDL as soonIDL } from '@/program/soon_vault';

// Define the interface for the store
interface NetworkStore {
  network: string; // Current network
  rpcUrl: string; // Current RPC URL
  contractAddress: string; // Current contract address
  idl: any; // IDL for the program
  authorityPublicKey: string; // Default authority public key
  setNetwork: (newNetwork: string) => void; // Function to set the network and RPC URL
}

const useNetworkStore = create<NetworkStore>((set) => ({
  network: "Solana Devnet", // Default network
  rpcUrl: "https://api.devnet.solana.com", // Default RPC URL for Devnet
  contractAddress: "HoU7uBBQf1eqX2StdnCdgA7wuDZB3kyxU1EgpZ6aqPKF", // Default contract address
  authorityPublicKey: 'spngKTnGPcTAauuFR7mEzYBXhCbsAsWdTUghLra91B4',
  idl: solanaIDL, // Default IDL (can be set later)

  setNetwork: (newNetwork: string) => {
    let newRpcUrl;
    let newContractAddress;
    let newIdl;
    let newAuthority;

    if (newNetwork === "Solana Devnet") {
      newRpcUrl = "https://api.devnet.solana.com";
      newContractAddress = "HoU7uBBQf1eqX2StdnCdgA7wuDZB3kyxU1EgpZ6aqPKF";
      newIdl = solanaIDL; // Set the appropriate IDL for Devnet
      newAuthority = 'spngKTnGPcTAauuFR7mEzYBXhCbsAsWdTUghLra91B4';
    } else if (newNetwork === "SOON Devnet") {
        newRpcUrl = "https://rpc.devnet.soo.network/rpc"; // Replace with actual Testnet URL
        newContractAddress = "2ZoxjRSMEc67GbE3uzyNPxSM7tj72Fk2jhm5KEvHvYr9";
        newIdl = soonIDL; // Set the appropriate IDL for Testnet
        newAuthority = '7mddywPSUdnsstKxEmVv54xk5ZcjAp7HsF7ExMUGJpWe';
    }

    set({
      network: newNetwork,
      rpcUrl: newRpcUrl,
      contractAddress: newContractAddress,
      idl: newIdl,
      authorityPublicKey: newAuthority
    });
  },
}));

export default useNetworkStore;
