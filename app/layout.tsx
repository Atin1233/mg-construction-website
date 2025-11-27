import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { COMPANY_INFO } from '@/lib/constants';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.name} | Concrete & Foundation Specialists Since 1991`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: 'Quality concrete and foundation work for commercial and residential construction in New Jersey. Over 30 years of reliable craftsmanship.',
  keywords: ['construction', 'concrete', 'foundation', 'masonry', 'New Jersey', 'commercial construction', 'residential construction'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mgconstruction.com',
    siteName: COMPANY_INFO.name,
    title: `${COMPANY_INFO.name} | Concrete & Foundation Specialists`,
    description: 'Quality concrete and foundation work for commercial and residential construction in New Jersey.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '', // Add Google verification code if available
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

