import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Ahmed Asim Zaman - Full Stack Developer',
  description: 'Passionate Full Stack Developer specializing in Next.js, React, and modern web technologies. Creator of EventEase, VolunteerMe, and innovative web solutions.',
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
    images: [
      {
        url: 'https://ahmedasimzaman.com/og-image.jpg',
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
    images: ['https://ahmedasimzaman.com/og-image.jpg'],
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
    google: 'your-google-verification-code', // Add your Google Search Console verification
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Ahmed Asim Zaman',
      jobTitle: 'Full Stack Developer',
      url: 'https://ahmedasimzaman.com',
      sameAs: [
        'https://github.com/ahmedasimzaman', // Add your actual social links
        'https://linkedin.com/in/ahmedasimzaman',
        'https://twitter.com/ahmedasimzaman',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance / Open to Opportunities',
      },
      knowsAbout: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'MongoDB',
        'Express.js',
        'Full Stack Development',
        'Web Development',
      ],
    }),
  },
};

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}