// src/types/blog.ts
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    image: string;
    bio: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  tags: string[];
  category: string;
  featured: boolean;
  imageUrl: string;
  views?: number;
  likes?: number;
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  count: number;
  color: string;
}

export interface BlogTag {
  id: string;
  name: string;
  count: number;
}