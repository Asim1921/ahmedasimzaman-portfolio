// src/app/blog/admin/page.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PlusIcon,
  DocumentTextIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  CloudArrowUpIcon,
  TagIcon,
  CalendarIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';
import { blogPosts, blogCategories } from '@/data/blog';
import { BlogPost } from '@/types/blog';

const BlogAdminPage: React.FC = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'web-development',
    tags: '',
    featured: false,
    imageUrl: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleCreatePost = () => {
    setIsCreating(true);
    setEditingPost(null);
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: 'web-development',
      tags: '',
      featured: false,
      imageUrl: ''
    });
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setIsCreating(true);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      tags: post.tags.join(', '),
      featured: post.featured,
      imageUrl: post.imageUrl
    });
  };

  const handleSavePost = () => {
    // In a real application, this would make an API call
    console.log('Saving post:', formData);
    
    // Create slug from title
    const slug = formData.title.toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    const newPost: BlogPost = {
      id: editingPost?.id || Date.now().toString(),
      title: formData.title,
      slug: editingPost?.slug || slug,
      excerpt: formData.excerpt,
      content: formData.content,
      author: {
        name: 'Ahmed Asim Zaman',
        image: '/images/profile.jpg',
        bio: 'Full Stack Developer and Cybersecurity Enthusiast'
      },
      publishedAt: editingPost?.publishedAt || new Date().toISOString(),
      readTime: Math.ceil(formData.content.split(' ').length / 200), // Estimate reading time
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      category: formData.category,
      featured: formData.featured,
      imageUrl: formData.imageUrl || '/images/blog/default.jpg',
      views: editingPost?.views || 0,
      likes: editingPost?.likes || 0
    };

    // Here you would typically send this to your backend
    alert(`Post ${editingPost ? 'updated' : 'created'} successfully!`);
    setIsCreating(false);
    setEditingPost(null);
  };

  const handleDeletePost = (postId: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      // In a real application, this would make an API call
      console.log('Deleting post:', postId);
      alert('Post deleted successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
              <div>
                <h1 className="text-4xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
                  Blog Admin Dashboard
                </h1>
                <p className="text-gray-300">Manage your blog posts and content</p>
              </div>
              
              <motion.button
                onClick={handleCreatePost}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlusIcon className="w-5 h-5" />
                New Post
              </motion.button>
            </div>

            {/* Create/Edit Form */}
            {isCreating && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-8 shadow-2xl"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  {editingPost ? 'Edit Post' : 'Create New Post'}
                </h2>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Title */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                        placeholder="Enter post title..."
                        required
                      />
                    </div>

                    {/* Excerpt */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Excerpt *
                      </label>
                      <textarea
                        name="excerpt"
                        value={formData.excerpt}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-vertical"
                        placeholder="Brief description of the post..."
                        required
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Category *
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      >
                        {blogCategories.map(category => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Tags */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Tags
                      </label>
                      <input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                        placeholder="tag1, tag2, tag3..."
                      />
                      <p className="text-xs text-gray-500 mt-1">Separate tags with commas</p>
                    </div>

                    {/* Image URL */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Featured Image URL
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          name="imageUrl"
                          value={formData.imageUrl}
                          onChange={handleInputChange}
                          className="flex-1 px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                          placeholder="https://example.com/image.jpg"
                        />
                        <button className="px-4 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-all">
                          <PhotoIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Featured Toggle */}
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="featured"
                        checked={formData.featured}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-violet-600 bg-black/30 border-white/10 rounded focus:ring-violet-500"
                      />
                      <label className="ml-2 text-sm text-gray-300">
                        Featured Post
                      </label>
                    </div>
                  </div>

                  {/* Right Column - Content */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Content *
                    </label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      rows={20}
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-vertical font-mono text-sm"
                      placeholder="Write your blog post content here... You can use Markdown formatting."
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">Supports Markdown formatting</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                  <motion.button
                    onClick={handleSavePost}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CloudArrowUpIcon className="w-5 h-5" />
                    {editingPost ? 'Update Post' : 'Publish Post'}
                  </motion.button>

                  <button
                    onClick={() => setIsCreating(false)}
                    className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-xl hover:bg-gray-600 transition-all"
                  >
                    Cancel
                  </button>

                  {editingPost && (
                    <button
                      onClick={() => handleDeletePost(editingPost.id)}
                      className="ml-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all"
                    >
                      Delete Post
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {/* Posts List */}
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-white/10">
                <h2 className="text-xl font-bold text-white">All Posts ({blogPosts.length})</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-black/20">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Title</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Category</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Published</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Views</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {blogPosts.map((post, index) => (
                      <motion.tr
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="hover:bg-white/5 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg flex items-center justify-center">
                              <DocumentTextIcon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-white font-medium line-clamp-1">{post.title}</h3>
                              <p className="text-gray-400 text-sm">{post.readTime} min read</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                            {blogCategories.find(cat => cat.id === post.category)?.name}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-green-400 text-sm">Published</span>
                            {post.featured && (
                              <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">
                                Featured
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1 text-gray-400 text-sm">
                            <CalendarIcon className="w-4 h-4" />
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1 text-gray-400 text-sm">
                            <EyeIcon className="w-4 h-4" />
                            {post.views?.toLocaleString() || 0}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <motion.button
                              onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                              className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              title="View Post"
                            >
                              <EyeIcon className="w-4 h-4" />
                            </motion.button>
                            <motion.button
                              onClick={() => handleEditPost(post)}
                              className="p-2 text-gray-400 hover:text-yellow-400 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              title="Edit Post"
                            >
                              <PencilIcon className="w-4 h-4" />
                            </motion.button>
                            <motion.button
                              onClick={() => handleDeletePost(post.id)}
                              className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              title="Delete Post"
                            >
                              <TrashIcon className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <DocumentTextIcon className="w-6 h-6 text-violet-400" />
                  <h3 className="text-lg font-semibold text-white">Total Posts</h3>
                </div>
                <p className="text-3xl font-bold text-violet-400">{blogPosts.length}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <EyeIcon className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Total Views</h3>
                </div>
                <p className="text-3xl font-bold text-blue-400">
                  {blogPosts.reduce((sum, post) => sum + (post.views || 0), 0).toLocaleString()}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <TagIcon className="w-6 h-6 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">Featured Posts</h3>
                </div>
                <p className="text-3xl font-bold text-green-400">
                  {blogPosts.filter(post => post.featured).length}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <CalendarIcon className="w-6 h-6 text-orange-400" />
                  <h3 className="text-lg font-semibold text-white">This Month</h3>
                </div>
                <p className="text-3xl font-bold text-orange-400">
                  {blogPosts.filter(post => {
                    const postDate = new Date(post.publishedAt);
                    const now = new Date();
                    return postDate.getMonth() === now.getMonth() && postDate.getFullYear() === now.getFullYear();
                  }).length}
                </p>
              </motion.div>
            </div>

            {/* Quick Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 bg-gradient-to-r from-violet-900/20 via-purple-900/20 to-indigo-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">Writing Tips</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Engaging Headlines</h4>
                    <p className="text-gray-400 text-sm">Use specific, actionable titles that promise value to readers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">SEO Optimization</h4>
                    <p className="text-gray-400 text-sm">Include relevant keywords naturally in your content and excerpts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Visual Content</h4>
                    <p className="text-gray-400 text-sm">Add high-quality featured images to make posts more engaging</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Consistent Publishing</h4>
                    <p className="text-gray-400 text-sm">Maintain a regular posting schedule to keep readers engaged</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Tag Strategy</h4>
                    <p className="text-gray-400 text-sm">Use 3-7 relevant tags to improve discoverability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Reader Value</h4>
                    <p className="text-gray-400 text-sm">Always focus on providing actionable insights and solutions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogAdminPage;