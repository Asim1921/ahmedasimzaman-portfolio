// src/types/index.ts

// Existing types
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  endDate?: string;
  metrics?: {
    users?: string;
    performance?: string;
    impact?: string;
  };
  gradient: string;
  glowColor: string;
}

export interface Skill {
  category: string;
  name: string;
  proficiency: number;
  icon: string;
  color: string;
  experience: string;
  glow: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  gradient: string;
  glow: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  gradient: string;
  achievements: string[];
}

export interface ContactInfo {
  icon: any;
  label: string;
  value: string;
  href: string;
  description: string;
  gradient: string;
  glow: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: any;
  gradient: string;
  glow: string;
}

// Blog types
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

export interface BlogComment {
  id: string;
  postId: string;
  author: {
    name: string;
    email: string;
    avatar?: string;
  };
  content: string;
  createdAt: string;
  replies?: BlogComment[];
}

export interface BlogAnalytics {
  totalViews: number;
  totalPosts: number;
  totalComments: number;
  popularPosts: string[];
  monthlyViews: { month: string; views: number }[];
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
  name?: string;
  preferences?: string[];
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Theme types
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
  gradients: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

// Navigation types
export interface NavigationItem {
  name: string;
  href: string;
  icon: any;
  section: string;
  glow: string;
  type: 'scroll' | 'link';
}

// Animation types
export interface AnimationConfig {
  initial: any;
  animate: any;
  exit?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export type SortOrder = 'asc' | 'desc';

export type FilterOption = {
  label: string;
  value: string;
  count?: number;
};