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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: COMPANY_INFO.name,
  image: 'https://mgconstruction.com/og-image.jpg',
  '@id': 'https://mgconstruction.com',
  url: 'https://mgconstruction.com',
  telephone: COMPANY_INFO.phone,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_INFO.address,
    addressLocality: COMPANY_INFO.city,
    addressRegion: COMPANY_INFO.state,
    postalCode: COMPANY_INFO.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.4, // Approximate coordinates for Old Bridge, NJ
    longitude: -74.3,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
    ],
    opens: '07:00',
    closes: '17:00',
  },
  foundingDate: COMPANY_INFO.founded.toString(),
  areaServed: {
    '@type': 'State',
    name: 'New Jersey',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

