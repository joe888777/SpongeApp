'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const navItems = [
    { icon: '🔍', label: 'Discover', href: '/' },
    { icon: '🔄', label: 'Swap', href: '/swap' },
    { icon: '🏦', label: 'Vault', href: '/vault' },
    { icon: '📊', label: 'Portfolio', href: '/portfolio' },
    { icon: '🎯', label: 'Strategy', href: '/strategy' },
    { icon: '📈', label: 'Dashboard', href: '/dashboard' },
    { icon: '🌐', label: 'DeFi', href: '/defi' },
    { icon: '👥', label: 'Referral', href: '/referral' },
    { icon: '⚖️', label: 'Governance', href: '/governance' },
    { icon: '📄', label: 'Docs', href: '/docs' },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-[#030711] border-r border-gray-200 dark:border-gray-800">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <span className="text-2xl">✨</span>
          <h1 className="text-xl font-semibold text-black dark:text-white">Web3 App</h1>
        </div>
        
        <div className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm transition-colors ${
                pathname === item.href
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#141921]'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}