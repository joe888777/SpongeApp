export default function ReferralPage() {
  return (
    <div className="min-h-screen bg-[#030711] text-white">
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Referral Program</h1>
          <div className="bg-[#0A0F1C] rounded-xl p-6 border border-gray-800">
            <div className="text-center mb-6">
              <h2 className="text-lg font-semibold mb-2">Invite Friends & Earn Rewards</h2>
              <p className="text-gray-400">Share your referral link and earn rewards when your friends trade</p>
            </div>
            <div className="p-4 bg-[#1A1F2E] rounded-lg mb-6">
              <p className="text-sm text-gray-400 mb-2">Your Referral Link</p>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  readOnly
                  className="flex-1 bg-transparent border border-gray-700 rounded-lg px-4 py-2"
                  value="Connect wallet to get your referral link"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}