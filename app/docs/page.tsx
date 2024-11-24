export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#030711] text-white">
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Documentation</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Getting Started', 'API Reference', 'Tutorials', 'Integration Guide', 'FAQs', 'Support'].map((item) => (
              <div key={item} className="bg-[#0A0F1C] rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-2">{item}</h3>
                <p className="text-gray-400 mb-4">Learn more about our platform and features.</p>
                <button className="w-full py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}