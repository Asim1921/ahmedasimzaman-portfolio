// src/app/blog/[slug]/layout.tsx
import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog';

interface BlogPostLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found - Ahmed Asim Zaman',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} - Ahmed Asim Zaman`,
    description: post.excerpt,
    keywords: [...post.tags, 'Ahmed Asim Zaman', 'Blog'],
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
  return children;
}