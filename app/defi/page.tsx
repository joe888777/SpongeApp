export default function DefiPage() {
  return (
    <div className="min-h-screen bg-yellow-50 dark:bg-[#030711] text-black dark:text-white">
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">DeFi</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Lending', 'Borrowing', 'Yield Farming', 'Liquidity Pools', 'Staking', 'Governance'].map((item) => (
              <div key={item} className="bg-white dark:bg-[#0A0F1C] rounded-xl p-6 border-4 border-yellow-400 dark:border-yellow-600">
                <h3 className="text-lg font-semibold mb-2">{item}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Explore {item.toLowerCase()} opportunities in DeFi.</p>
                <button className="w-full py-2 bg-green-400 text-black rounded-xl font-medium hover:bg-green-300 transition-all border-4 border-green-600">
                  Explore 🚀
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}