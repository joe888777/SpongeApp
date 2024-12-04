'use client';

interface TokenBalanceProps {
  symbol: string;
  amount: number;
  value: number;
}

export default function TokenBalance({ symbol, amount, value }: TokenBalanceProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">◎</span>
        <span className="font-bold">{symbol}</span>
      </div>
      <div className="space-y-1">
        <div className="text-3xl font-bold">{amount.toFixed(3)}</div>
        <div className="text-gray-600 dark:text-gray-400">
          ${value.toFixed(2)}
        </div>
      </div>
    </div>
  );
}