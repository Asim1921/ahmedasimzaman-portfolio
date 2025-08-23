import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PerformanceMonitor from '@/components/ui/PerformanceMonitor';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className={`${inter.className} antialiased bg-black`}>
        <PerformanceMonitor />
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}