import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/sections/Navbar';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from '@/lib/LanguageContext';
import Footer from '@/components/sections/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Professional Websites for Local Businesses',
  description: 'Lightning-fast, SEO-optimized websites for small businesses',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}

