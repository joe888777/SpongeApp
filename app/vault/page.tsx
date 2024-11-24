'use client';

import { useVaultStore } from '../store/vaultStore';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

export default function VaultPage() {
  const { activeTab, tokens, setActiveTab } = useVaultStore();

  return (
    <main className="ml-64 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-8 text-black dark:text-white">Vault</h1>
        
        <div className="bg-white dark:bg-[#030711] rounded-2xl border border-gray-200 dark:border-gray-800">
          <Tabs defaultValue="stake" onValueChange={(value) => setActiveTab(value as 'stake' | 'unstake')}>
            <TabsList className="w-full p-1">
              <TabsTrigger value="stake" className="flex-1">Stake</TabsTrigger>
              <TabsTrigger value="unstake" className="flex-1">Unstake</TabsTrigger>
            </TabsList>

            <div className="p-6 space-y-4">
              {tokens.map((token) => (
                <div key={token.symbol} className="p-6 bg-white dark:bg-[#141921] rounded-xl border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{token.icon}</span>
                      <span className="font-medium text-black dark:text-white">{token.symbol}</span>
                    </div>
                    <span className="text-xl font-semibold text-black dark:text-white">{token.value}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Available: {token.available}</span>
                    <span>${token.value}</span>
                  </div>
                </div>
              ))}

              <div className="text-center text-sm text-gray-500 dark:text-gray-400 py-4 bg-gray-50 dark:bg-[#141921] rounded-xl">
                1 SOL = ~0.975340 tSOL
              </div>

              <button className="w-full py-4 bg-white text-black dark:bg-black dark:text-white rounded-xl font-medium hover:opacity-90 transition-all border border-gray-200 dark:border-gray-800">
                Liquid Stake
              </button>
            </div>
          </Tabs>
        </div>
      </div>
    </main>
  );
}