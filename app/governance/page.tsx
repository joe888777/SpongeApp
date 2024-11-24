export default function GovernancePage() {
  return (
    <div className="min-h-screen bg-[#030711] text-white">
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Governance</h1>
          <div className="space-y-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-[#0A0F1C] rounded-xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Proposal #{index}</h3>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">Active</span>
                </div>
                <p className="text-gray-400 mb-4">Community proposal for platform improvement.</p>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                    Vote
                  </button>
                  <button className="px-4 py-2 bg-[#1A1F2E] text-white rounded-xl font-medium hover:bg-[#2A2F3E] transition-colors">
                    View Details
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