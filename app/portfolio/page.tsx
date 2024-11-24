export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#030711] text-white">
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Portfolio</h1>
          <div className="bg-[#0A0F1C] rounded-xl p-6 border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-[#1A1F2E] rounded-lg">
                <p className="text-sm text-gray-400">Total Value</p>
                <p className="text-xl font-semibold">$0.00</p>
              </div>
              <div className="p-4 bg-[#1A1F2E] rounded-lg">
                <p className="text-sm text-gray-400">24h Change</p>
                <p className="text-xl font-semibold text-green-400">+0.00%</p>
              </div>
              <div className="p-4 bg-[#1A1F2E] rounded-lg">
                <p className="text-sm text-gray-400">Assets</p>
                <p className="text-xl font-semibold">0</p>
              </div>
            </div>
            <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
              Connect Wallet to View Portfolio
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}