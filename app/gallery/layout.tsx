import type { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Gallery',
  description: `View our project gallery showcasing ${COMPANY_INFO.name}'s concrete and foundation work across New Jersey.`,
  openGraph: {
    title: `Gallery | ${COMPANY_INFO.name}`,
    description: 'View our project gallery showcasing quality concrete and foundation work.',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

