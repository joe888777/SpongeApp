export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#030711] text-white">
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-[#0A0F1C] rounded-xl p-6 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">Portfolio Overview</h2>
              <div className="h-64 flex items-center justify-center bg-[#1A1F2E] rounded-lg">
                Chart Placeholder
              </div>
            </div>
            <div className="bg-[#0A0F1C] rounded-xl p-6 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <p className="text-gray-400">Connect wallet to view activity</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}