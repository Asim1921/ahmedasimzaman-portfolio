// src/app/blog/[slug]/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  CalendarIcon,
  ClockIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon,
  ArrowLeftIcon,
  TagIcon,
  UserIcon,
  BookmarkIcon
} from '@heroicons/react/24/outline';
import { blogPosts } from '@/data/blog';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ params }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);

  // Find the post by slug
  const post = blogPosts.find(p => p.slug === params.slug);

  useEffect(() => {
    if (post) {
      setLikes(post.likes || 0);
      setViews(post.views || 0);
      
      // Increment views (in a real app, this would be an API call)
      setViews(prev => prev + 1);
    }
  }, [post]);

  if (!post) {
    notFound();
  }

  const handleLike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
    } else {
      setLikes(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (
      p.category === post.category || 
      p.tags.some(tag => post.tags.includes(tag))
    ))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-indigo-900/20"></div>
          
          <motion.div 
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Article Header */}
            <article className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              {/* Featured Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Featured Badge */}
                {post.featured && (
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full">
                      Featured Article
                    </span>
                  </div>
                )}
              </div>

              {/* Article Content */}
              <div className="p-8 md:p-12">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    {formatDate(post.publishedAt)}
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4" />
                    {post.readTime} min read
                  </div>
                  <div className="flex items-center gap-2">
                    <EyeIcon className="w-4 h-4" />
                    {views.toLocaleString()} views
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartIcon className="w-4 h-4" />
                    {likes} likes
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Excerpt */}
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-8 p-6 bg-black/30 rounded-2xl border border-white/10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{post.author.name}</h3>
                    <p className="text-gray-400 text-sm">{post.author.bio}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                      isLiked 
                        ? 'bg-red-500/20 border-red-500/50 text-red-400' 
                        : 'bg-black/30 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HeartIcon className={`w-4 h-4 ${isLiked ? 'fill-red-400' : ''}`} />
                    Like ({likes})
                  </motion.button>

                  <motion.button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                      isBookmarked 
                        ? 'bg-blue-500/20 border-blue-500/50 text-blue-400' 
                        : 'bg-black/30 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BookmarkIcon className={`w-4 h-4 ${isBookmarked ? 'fill-blue-400' : ''}`} />
                    {isBookmarked ? 'Saved' : 'Save'}
                  </motion.button>

                  <motion.button
                    onClick={handleShare}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border bg-black/30 border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShareIcon className="w-4 h-4" />
                    Share
                  </motion.button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-violet-500/20 text-violet-300 text-sm rounded-full border border-violet-500/30 flex items-center gap-1"
                    >
                      <TagIcon className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Article Content */}
                <div className="prose prose-invert prose-lg max-w-none">
                  <div 
                    className="text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ 
                      __html: post.content.replace(/\n/g, '<br/>').replace(/#{1,6} /g, '<h2 class="text-2xl font-bold text-white mt-8 mb-4">').replace(/<h2 class="text-2xl font-bold text-white mt-8 mb-4">([^<]+)/g, '<h2 class="text-2xl font-bold text-white mt-8 mb-4">$1</h2>')
                    }}
                  />
                </div>
              </div>
            </article>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Related Articles
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                    whileHover={{ y: -5 }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                      {/* Image */}
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={relatedPost.imageUrl}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-3 text-xs text-gray-400">
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="w-3 h-3" />
                            {formatDate(relatedPost.publishedAt)}
                          </div>
                          <div className="flex items-center gap-1">
                            <ClockIcon className="w-3 h-3" />
                            {relatedPost.readTime} min
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                          {relatedPost.title}
                        </h3>

                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {relatedPost.excerpt}
                        </p>

                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
                        >
                          Read Article →
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-violet-900/20 via-purple-900/20 to-indigo-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-6">
                Get notified when I publish new articles about technology, cybersecurity, and web development.
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;