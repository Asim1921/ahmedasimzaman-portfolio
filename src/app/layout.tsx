import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ahmed Asim Zaman - Full Stack Developer',
  description: 'Passionate Full Stack Developer specializing in Next.js, React, and modern web technologies.',
  keywords: [
    'Ahmed Asim Zaman',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'MERN Stack',
    'Web Developer',
    'EventEase',
    'VolunteerMe',
    'Portfolio'
  ],
  authors: [{ name: 'Ahmed Asim Zaman', url: 'https://ahmedasimzaman.com' }],
  openGraph: {
    title: 'Ahmed Asim Zaman - Full Stack Developer',
    description: 'Portfolio showcasing modern web applications and development expertise',
    url: 'https://ahmedasimzaman.com',
    siteName: 'Ahmed Asim Zaman Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Asim Zaman - Full Stack Developer',
    description: 'Portfolio showcasing modern web applications and development expertise',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-black`}>
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}