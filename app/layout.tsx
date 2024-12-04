import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/ThemeProvider';

import WalletContextProvider from './components/ui/walletContextProvider';
const inter = Inter({ subsets: ['latin'] });


export const metadata = {
  title: 'Web3 Dashboard',
  description: 'Modern Web3 dashboard application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen bg-white dark:bg-[#030711]">
              <Navbar />
              <WalletContextProvider>
                {children}
              </WalletContextProvider>
            </div>

        </ThemeProvider>
      </body>
    </html>
  );
}