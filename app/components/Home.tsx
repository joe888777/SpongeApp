"use client"
import FeatureCard from '../components/FeatureCard';


export default function HomePage() {
  const features = [
    {
      icon: '🔄',
      title: 'Swap',
      description: 'Exchange tokens quickly and efficiently with our decentralized swap feature.',
    },
    {
      icon: '🏦',
      title: 'Vault',
      description: 'Securely store and manage your digital assets with advanced staking options.',
    },
    {
      icon: '📊',
      title: 'Portfolio',
      description: 'Track and analyze your investments across various cryptocurrencies and tokens.',
    },
    {
      icon: '🎯',
      title: 'Strategy',
      description: 'Access tailored investment strategies to optimize your crypto portfolio.',
    },
    {
      icon: '📈',
      title: 'Dashboard',
      description: 'Get a comprehensive overview of your account activity and performance.',
    },
  ];

  return (
        <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Discover</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
                <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                />
            ))}
            </div>
        </div>
        </main>
  );
}