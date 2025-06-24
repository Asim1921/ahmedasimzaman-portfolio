// src/app/blog/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Ahmed Asim Zaman',
  description: 'Insights on cybersecurity, web development, AI, and the latest in technology. Exploring the intersection of code, security, and innovation.',
  keywords: [
    'Ahmed Asim Zaman',
    'Blog',
    'Cybersecurity',
    'Web Development',
    'AI',
    'Technology',
    'Programming',
    'Security Analysis',
    'Tech Insights'
  ],
  openGraph: {
    title: 'Blog - Ahmed Asim Zaman',
    description: 'Insights on cybersecurity, web development, AI, and the latest in technology.',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}