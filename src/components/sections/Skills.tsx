'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SkillsSlider } from '@/components/ui/skills-slider';
import { SparklesIcon, CpuChipIcon, CloudIcon, WrenchScrewdriverIcon, PaintBrushIcon } from '@heroicons/react/24/outline';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillsData = [
    // Frontend
    {
      category: 'frontend',
      name: 'React.js',
      proficiency: 95,
      icon: '⚛️',
      color: 'from-cyan-400 via-blue-500 to-indigo-600',
      experience: '3+ years',
    },
    {
      category: 'frontend',
      name: 'Next.js',
      proficiency: 90,
      icon: '▲',
      color: 'from-gray-800 via-black to-gray-900',
      experience: '2+ years',
    },
    {
      category: 'frontend',
      name: 'TypeScript',
      proficiency: 88,
      icon: '🔷',
      color: 'from-blue-500 via-blue-600 to-blue-800',
      experience: '2+ years',
    },
    {
      category: 'frontend',
      name: 'Tailwind CSS',
      proficiency: 92,
      icon: '🎨',
      color: 'from-teal-400 via-cyan-500 to-blue-600',
      experience: '2+ years',
    },
    {
      category: 'frontend',
      name: 'Framer Motion',
      proficiency: 85,
      icon: '🎭',
      color: 'from-purple-500 via-pink-500 to-red-600',
      experience: '1+ years',
    },

    // Backend
    {
      category: 'backend',
      name: 'Node.js',
      proficiency: 87,
      icon: '💚',
      color: 'from-green-500 via-emerald-600 to-green-700',
      experience: '3+ years',
    },
    {
      category: 'backend',
      name: 'Express.js',
      proficiency: 85,
      icon: '🚂',
      color: 'from-gray-600 via-gray-700 to-gray-800',
      experience: '3+ years',
    },
    {
      category: 'backend',
      name: 'Python',
      proficiency: 80,
      icon: '🐍',
      color: 'from-yellow-400 via-yellow-500 to-blue-600',
      experience: '2+ years',
    },
    {
      category: 'backend',
      name: 'FastAPI',
      proficiency: 75,
      icon: '⚡',
      color: 'from-green-400 via-emerald-500 to-teal-600',
      experience: '1+ years',
    },

    // Database
    {
      category: 'database',
      name: 'MongoDB',
      proficiency: 85,
      icon: '🍃',
      color: 'from-green-500 via-green-600 to-green-700',
      experience: '3+ years',
    },
    {
      category: 'database',
      name: 'PostgreSQL',
      proficiency: 78,
      icon: '🐘',
      color: 'from-blue-600 via-indigo-600 to-blue-700',
      experience: '2+ years',
    },
    {
      category: 'database',
      name: 'Redis',
      proficiency: 70,
      icon: '🔴',
      color: 'from-red-500 via-red-600 to-red-700',
      experience: '1+ years',
    },

    // Tools
    {
      category: 'tools',
      name: 'Git & GitHub',
      proficiency: 90,
      icon: '🔧',
      color: 'from-gray-700 via-gray-800 to-black',
      experience: '3+ years',
    },
    {
      category: 'tools',
      name: 'Docker',
      proficiency: 75,
      icon: '🐳',
      color: 'from-blue-400 via-blue-500 to-blue-600',
      experience: '1+ years',
    },
    {
      category: 'tools',
      name: 'Vercel',
      proficiency: 85,
      icon: '🚀',
      color: 'from-black via-gray-900 to-gray-800',
      experience: '2+ years',
    },
    {
      category: 'tools',
      name: 'Figma',
      proficiency: 80,
      icon: '🎨',
      color: 'from-purple-500 via-pink-500 to-orange-500',
      experience: '2+ years',
    }
  ];

  const categories = [
    { id: 'all', label: 'All Skills', icon: SparklesIcon, gradient: 'from-violet-500 to-purple-600' },
    { id: 'frontend', label: 'Frontend', icon: PaintBrushIcon, gradient: 'from-cyan-500 to-blue-600' },
    { id: 'backend', label: 'Backend', icon: CpuChipIcon, gradient: 'from-green-500 to-emerald-600' },
    { id: 'database', label: 'Database', icon: CloudIcon, gradient: 'from-orange-500 to-red-600' },
    { id: 'tools', label: 'Tools', icon: WrenchScrewdriverIcon, gradient: 'from-purple-500 to-pink-600' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  const skillStats = {
    totalSkills: skillsData.length,
    avgProficiency: Math.round(skillsData.reduce((acc, skill) => acc + skill.proficiency, 0) / skillsData.length),
    expertSkills: skillsData.filter(skill => skill.proficiency >= 90).length,
    categories: categories.length - 1
  };

  return (
    <section id="skills" className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-indigo-900/20"></div>
        
        <motion.div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
            rotate: [360, 0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50">
                <CpuChipIcon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
            </motion.div>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A comprehensive arsenal of cutting-edge technologies and tools that power exceptional digital experiences
            </motion.p>
          </div>

          {/* Skills Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { label: 'Technologies', value: skillStats.totalSkills, gradient: 'from-cyan-500 to-blue-600', icon: '⚙️' },
              { label: 'Avg Proficiency', value: `${skillStats.avgProficiency}%`, gradient: 'from-green-500 to-emerald-600', icon: '📊' },
              { label: 'Expert Level', value: skillStats.expertSkills, gradient: 'from-purple-500 to-pink-600', icon: '🏆' },
              { label: 'Categories', value: skillStats.categories, gradient: 'from-orange-500 to-red-600', icon: '📁' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-500 border backdrop-blur-xl ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.gradient} text-white border-white/20 shadow-2xl`
                    : 'bg-black/30 text-gray-300 hover:text-white border-white/10 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Slider */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <SkillsSlider skills={filteredSkills} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
