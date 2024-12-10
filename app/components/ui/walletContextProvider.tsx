"use client";
import React, { ReactNode } from "react";
import { UnifiedWalletProvider, useWallet } from "@jup-ag/wallet-adapter";
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { BackpackWalletAdapter } from "@solana/wallet-adapter-backpack";
import { MagicEdenWalletAdapter } from "@solana/wallet-adapter-magiceden";
import { UnifiedWalletButton } from "@jup-ag/wallet-adapter";
import ThemeToggle from "../ThemeToggle";
import "@jup-ag/terminal/css";

const WalletContextProvider: React.FC<{ children: ReactNode }> = (props: {
  children: ReactNode;
}) => {
  return (
    <UnifiedWalletProvider
      wallets={[
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter(),
        new BackpackWalletAdapter(),
        new MagicEdenWalletAdapter(),
      ]}
      config={{
        autoConnect: true,
        env: "devnet",
        metadata: {
          name: "UnifiedWallet",
          description: "UnifiedWallet",
          url: "https://jup.ag",
          iconUrls: ["https://jup.ag/favicon.ico"],
        },
        walletlistExplanation: {
          href: "https://station.jup.ag/docs/additional-topics/wallet-list",
        },
        theme: "dark",
      }}
    >
      <div className="w-full flex justify-end p-6">
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <UnifiedWalletButton />
        </div>
      </div>
      {props.children}
    </UnifiedWalletProvider>
  );
};

export default WalletContextProvider;
