import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PerformanceMonitor from '@/components/ui/PerformanceMonitor';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Ahmed Asim Zaman - Full Stack Developer',
  description: 'Passionate Full Stack Developer specializing in Next.js, React, and modern web technologies. View my portfolio of innovative web applications and projects.',
  keywords: [
    'Ahmed Asim Zaman',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'MERN Stack',
    'Web Developer',
    'EventEase',
    'VolunteerMe',
    'CRM System',
    'Portfolio',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'MongoDB'
  ],
  authors: [{ name: 'Ahmed Asim Zaman', url: 'https://ahmedasimzaman.com' }],
  creator: 'Ahmed Asim Zaman',
  publisher: 'Ahmed Asim Zaman',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ahmedasimzaman.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ahmed Asim Zaman - Full Stack Developer',
    description: 'Portfolio showcasing modern web applications and development expertise',
    url: 'https://ahmedasimzaman.com',
    siteName: 'Ahmed Asim Zaman Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Ahmed Asim Zaman - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Asim Zaman - Full Stack Developer',
    description: 'Portfolio showcasing modern web applications and development expertise',
    creator: '@ahmedasimzaman',
    images: ['/images/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans bg-ink text-[var(--text)] antialiased relative overflow-x-hidden selection:bg-accent/30">
        <div aria-hidden className="grain" />
        <PerformanceMonitor />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}