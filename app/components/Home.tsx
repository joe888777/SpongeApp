"use client"
import FeatureCard from '../components/FeatureCard';
import Link from 'next/link';

export default function HomePage() {

  const features = [
    {
      icon: '🔄',
      title: 'Swap',
      description: 'Exchange tokens quickly and efficiently with our decentralized swap feature.',
      link: '/swap'
    },
    {
      icon: '🏦',
      title: 'Vault',
      description: 'Securely store and manage your digital assets with advanced staking options.',
      link: '/vault'
    },
    {
      icon: '📊',
      title: 'Portfolio',
      description: 'Track and analyze your investments across various cryptocurrencies and tokens.',
      link: '/portfolio'
    },
    {
      icon: '🎯',
      title: 'Strategy',
      description: 'Access tailored investment strategies to optimize your crypto portfolio.',
      link: '/strategy'
    },
    {
      icon: '📈',
      title: 'Dashboard',
      description: 'Get a comprehensive overview of your account activity and performance.',
      link: '/dashboard'
    },
    {
      icon: '🌐',
      title: 'Intersoon',
      description: 'Connect to the Intersoon network for enhanced DeFi capabilities.',
      link: 'https://intersoon.soo.network/'
    },
    {
      icon: '🔗',
      title: 'Soon Bridge',
      description: 'Bridge your assets using the Soon testnet bridge.',
      link: 'https://bridge.testnet.soo.network/home'
    },
  ];


  return (
    <main className="ml-64 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Discover</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Link href={feature.link} key={index}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}