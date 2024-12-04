'use client';

interface UnstakeStatsProps {
  currentPrice: number;
}

export default function UnstakeStats({ currentPrice }: UnstakeStatsProps) {
  return (
    <div className="space-y-3 bg-white dark:bg-[#0A0F1C] p-4 rounded-2xl border-2 border-gray-100 dark:border-gray-800">
      <div className="flex justify-between items-center">
        <span className="text-base text-gray-600 dark:text-gray-400">Current Price</span>
        <span className="font-bold text-lg">1 SOL = ${currentPrice.toLocaleString()}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-base text-gray-600 dark:text-gray-400">Unstaking Period</span>
        <span className="font-bold text-lg text-yellow-500">~2-3 days</span>
      </div>
    </div>
  );
}