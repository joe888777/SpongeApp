'use client';

import VaultTabs from '../components/vault/VaultTabs';

export default function VaultPage() {
  const stakeData = {
    tokenSymbol: 'SOL',
    balance: 0.006,
    dollarValue: 1.68,
    currentPrice: 229.087,
    estimatedApy: 8
  };

  const unstakeData = {
    tokenSymbol: 'SOL',
    balance: 0.87780624,
    dollarValue: 201.10,
    currentPrice: 229.087,
  };

  return (
    <div className="min-h-screen bg-yellow-50 dark:bg-[#030711] text-black dark:text-white">
      <main className="ml-64 p-8">
        <div className="max-w-xl mx-auto">
          <div className="mb-8">
            <div className="bg-blue-400 text-white p-6 rounded-2xl inline-block transform hover:scale-105 transition-all border-4 border-blue-600">
              <h1 className="text-2xl font-bold">Earn Rewards by staking your tokens 🎉</h1>
            </div>
          </div>

          <VaultTabs 
            stakeData={stakeData}
            unstakeData={unstakeData}
          />
        </div>
      </main>
    </div>
  );
}