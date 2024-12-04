'use client';

import { MemeButton } from '../ui/MemeButton';
import StakePercentageButtons from './StakePercentageButtons';
import TokenBalance from './TokenBalance';

interface UnstakeCardProps {
  tokenSymbol: string;
  balance: number;
  dollarValue: number;
  currentPrice: number;
}

export default function UnstakeCard({ 
  tokenSymbol, 
  balance, 
  dollarValue,
  currentPrice,
}: UnstakeCardProps) {
  return (
    <div className="bg-white dark:bg-[#0A0F1C] rounded-2xl p-6 border-4 border-red-400">
      <TokenBalance 
        symbol={`st${tokenSymbol}`}
        amount={balance} 
        value={dollarValue}
      />
      
      <StakePercentageButtons />
      
      <div className="mt-6 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Current Price</span>
          <span className="font-bold">1 {tokenSymbol} = ${currentPrice.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Unstaking Period</span>
          <span className="font-bold text-yellow-500">~2-3 days ⏳</span>
        </div>
      </div>

      <MemeButton className="w-full mt-6 bg-red-400 hover:bg-red-300 border-red-600">
        Unstake tokens 🔄
      </MemeButton>
    </div>
  );
}