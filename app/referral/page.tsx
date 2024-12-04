export default function ReferralPage() {
  return (
    <div className="min-h-screen bg-yellow-50 dark:bg-[#030711] text-black dark:text-white">
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Referral Program</h1>
          <div className="bg-white dark:bg-[#0A0F1C] rounded-xl p-6 border-4 border-yellow-400 dark:border-yellow-600">
            <div className="text-center mb-6">
              <h2 className="text-lg font-semibold mb-2">Invite Friends & Earn Rewards 🎁</h2>
              <p className="text-gray-600 dark:text-gray-400">Share your referral link and earn rewards when your friends trade</p>
            </div>
            <div className="p-4 bg-yellow-100 dark:bg-[#1A1F2E] rounded-lg mb-6 border-2 border-yellow-300 dark:border-yellow-600">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Your Referral Link 🔗</p>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  readOnly
                  className="flex-1 bg-white dark:bg-[#0A0F1C] border-2 border-yellow-300 dark:border-yellow-600 rounded-lg px-4 py-2"
                  value="Connect wallet to get your referral link"
                />
                <button className="px-4 py-2 bg-green-400 text-black rounded-lg hover:bg-green-300 border-4 border-green-600">
                  Copy 📋
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}