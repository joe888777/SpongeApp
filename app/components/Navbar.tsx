'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const navItems = [
    { icon: '🧽', label: 'Discover', href: '/' },
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
    <nav className="fixed left-0 top-0 h-screen w-64 bg-yellow-200 dark:bg-[#030711] border-r-4 border-green-400">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <span className="text-3xl animate-bounce">🧽</span>
          <h1 className="text-xl font-bold text-black dark:text-white">Sponge</h1>
        </div>
        
        <div className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm transition-all transform hover:scale-105 ${
                pathname === item.href
                  ? 'bg-green-400 text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-400 hover:bg-green-100 dark:hover:bg-[#141921]'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}