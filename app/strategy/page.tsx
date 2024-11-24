export default function StrategyPage() {
  return (
    <div className="min-h-screen bg-[#030711] text-white">
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Strategy</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-[#0A0F1C] rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-2">Strategy {index}</h3>
                <p className="text-gray-400 mb-4">Optimize your portfolio with our advanced trading strategies.</p>
                <button className="w-full py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}