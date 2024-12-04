'use client';

import { MemeButton } from '../ui/MemeButton';
import StakePercentageButtons from './StakePercentageButtons';
import TokenBalance from './TokenBalance';

interface StakeCardProps {
  tokenSymbol: string;
  balance: number;
  dollarValue: number;
  currentPrice: number;
  estimatedApy: number;
}

export default function StakeCard({ 
  tokenSymbol, 
  balance, 
  dollarValue,
  currentPrice,
  estimatedApy 
}: StakeCardProps) {
  return (
    <div className="bg-white dark:bg-[#0A0F1C] rounded-2xl p-6 border-4 border-green-400">
      <TokenBalance 
        symbol={tokenSymbol} 
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
          <span className="text-gray-600 dark:text-gray-400">Estimated APY</span>
          <span className="font-bold text-green-500">{estimatedApy}% 🚀</span>
        </div>
      </div>

      <MemeButton className="w-full mt-6 bg-green-400 hover:bg-green-300 border-green-600">
        Stake tokens 🎯
      </MemeButton>
    </div>
  );
}