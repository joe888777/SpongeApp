'use client';

interface StakeStatsProps {
  currentPrice: number;
  estimatedApy: number;
}

export default function StakeStats({ currentPrice, estimatedApy }: StakeStatsProps) {
  return (
    <div className="space-y-3 bg-white dark:bg-[#0A0F1C] p-4 rounded-2xl border-2 border-gray-100 dark:border-gray-800">
      <div className="flex justify-between items-center">
        <span className="text-base text-gray-600 dark:text-gray-400">Current Price</span>
        <span className="font-bold text-lg">1 SOL = ${currentPrice.toLocaleString()}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-base text-gray-600 dark:text-gray-400">Estimated APY</span>
        <span className="font-bold text-lg text-green-500">{estimatedApy}%</span>
      </div>
    </div>
  );
}