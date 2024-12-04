export default function GovernancePage() {
  return (
    <div className="min-h-screen bg-yellow-50 dark:bg-[#030711] text-black dark:text-white">
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Governance</h1>
          <div className="space-y-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white dark:bg-[#0A0F1C] rounded-xl p-6 border-4 border-yellow-400 dark:border-yellow-600">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Proposal #{index}</h3>
                  <span className="px-3 py-1 bg-green-400 text-black rounded-full text-sm border-2 border-green-600">Active 🟢</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Community proposal for platform improvement.</p>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-green-400 text-black rounded-xl font-medium hover:bg-green-300 transition-all border-4 border-green-600">
                    Vote 🗳️
                  </button>
                  <button className="px-4 py-2 bg-yellow-400 text-black rounded-xl font-medium hover:bg-yellow-300 transition-all border-4 border-yellow-600">
                    View Details 👀
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}