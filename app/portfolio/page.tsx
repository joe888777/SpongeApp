export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-yellow-50 dark:bg-[#030711] text-black dark:text-white">
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Portfolio</h1>
          <div className="bg-white dark:bg-[#0A0F1C] rounded-xl p-6 border-4 border-yellow-400 dark:border-yellow-600">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-yellow-100 dark:bg-[#1A1F2E] rounded-lg border-2 border-yellow-300 dark:border-yellow-600">
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Value</p>
                <p className="text-xl font-semibold">$0.00 💰</p>
              </div>
              <div className="p-4 bg-yellow-100 dark:bg-[#1A1F2E] rounded-lg border-2 border-yellow-300 dark:border-yellow-600">
                <p className="text-sm text-gray-600 dark:text-gray-400">24h Change</p>
                <p className="text-xl font-semibold text-green-500">+0.00% 📈</p>
              </div>
              <div className="p-4 bg-yellow-100 dark:bg-[#1A1F2E] rounded-lg border-2 border-yellow-300 dark:border-yellow-600">
                <p className="text-sm text-gray-600 dark:text-gray-400">Assets</p>
                <p className="text-xl font-semibold">0 🏦</p>
              </div>
            </div>
            <button className="w-full py-3 bg-blue-400 text-black rounded-xl font-medium hover:bg-blue-300 transition-all border-4 border-blue-600">
              Connect Wallet to View Portfolio 🔌
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}