'use client';

export default function StakePercentageButtons() {
  const percentages = [25, 50, 75, 100];

  return (
    <div className="flex gap-2 mt-4">
      {percentages.map((percentage) => (
        <button
          key={percentage}
          className="flex-1 py-2 px-3 bg-yellow-200 hover:bg-yellow-300 rounded-xl text-sm font-bold text-black border-2 border-yellow-400 transform hover:scale-105 transition-all"
        >
          {percentage}%
        </button>
      ))}
    </div>
  );
}