import { create } from 'zustand';

interface Token {
  symbol: string;
  available: number;
  value: number;
  icon?: string;
}

interface VaultState {
  activeTab: 'stake' | 'unstake';
  tokens: Token[];
  setActiveTab: (tab: 'stake' | 'unstake') => void;
}

export const useVaultStore = create<VaultState>((set) => ({
  activeTab: 'stake',
  tokens: [
    {
      symbol: 'SOL',
      available: 0.097846,
      value: 0.00,
      icon: '◎',
    },
    {
      symbol: 'tSOL',
      available: 0.87780624,
      value: 0,
      icon: '⬥',
    },
  ],
  setActiveTab: (tab) => set({ activeTab: tab }),
}));