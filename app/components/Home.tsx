"use client"
import FeatureCard from '../components/FeatureCard';
import Link from 'next/link';
import { nanumPen } from '../fonts';
import soonIcon from '@/assets/image/soon.png';
import Image from 'next/image';

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
    // // {
    // //   icon: '🎯',
    // //   title: 'Strategy',
    // //   description: 'Access tailored investment strategies to optimize your crypto portfolio.',
    // //   link: '/strategy'
    // // },
    // {
    //   icon: '📈',
    //   title: 'Dashboard',
    //   description: 'Get a comprehensive overview of your account activity and performance.',
    //   link: '/dashboard'
    // },
    {
      icon: <Image width={28} height={28} alt="sponge" src={soonIcon} />,
      title: 'Intersoon',
      description: 'First bridge connecting the TON and Solana ecosystems.',
      link: 'https://intersoon.soo.network/'
    },
    {
      icon: <Image width={28} height={28} alt="sponge" src={soonIcon} />,
      title: 'Soon Bridge',
      description: 'Bridge your tokens between Ethereum and SOON',
      link: 'https://bridge.testnet.soo.network/home'
    },
  ];


  return (
    <main className="ml-64 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-2xl font-semibold mb-6 ${nanumPen.className}`}>Discover</h1>
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