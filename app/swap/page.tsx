export default function SwapPage() {
  return (
    <div className="min-h-screen bg-[#030711] text-white">
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Swap</h1>
          <div className="bg-[#0A0F1C] rounded-xl p-6 border border-gray-800">
            <div className="space-y-4">
              <div className="p-4 bg-[#1A1F2E] rounded-lg">
                <label className="block text-sm text-gray-400 mb-2">You Pay</label>
                <input type="text" className="w-full bg-transparent text-lg focus:outline-none" placeholder="0.0" />
              </div>
              <div className="p-4 bg-[#1A1F2E] rounded-lg">
                <label className="block text-sm text-gray-400 mb-2">You Receive</label>
                <input type="text" className="w-full bg-transparent text-lg focus:outline-none" placeholder="0.0" />
              </div>
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                Connect Wallet to Swap
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}