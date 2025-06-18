'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesIcon, CpuChipIcon, CloudIcon, WrenchScrewdriverIcon, PaintBrushIcon } from '@heroicons/react/24/outline';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillsData = [
    // Frontend
    {
      category: 'frontend',
      name: 'React.js',
      proficiency: 95,
      icon: '⚛️',
      color: 'from-cyan-400 via-blue-500 to-indigo-600',
      experience: '3+ years',
      glow: 'shadow-cyan-500/50'
    },
    {
      category: 'frontend',
      name: 'Next.js',
      proficiency: 90,
      icon: '▲',
      color: 'from-gray-800 via-black to-gray-900',
      experience: '2+ years',
      glow: 'shadow-gray-600/50'
    },
    {
      category: 'frontend',
      name: 'TypeScript',
      proficiency: 88,
      icon: '🔷',
      color: 'from-blue-500 via-blue-600 to-blue-800',
      experience: '2+ years',
      glow: 'shadow-blue-500/50'
    },
    {
      category: 'frontend',
      name: 'Tailwind CSS',
      proficiency: 92,
      icon: '🎨',
      color: 'from-teal-400 via-cyan-500 to-blue-600',
      experience: '2+ years',
      glow: 'shadow-teal-500/50'
    },
    {
      category: 'frontend',
      name: 'Framer Motion',
      proficiency: 85,
      icon: '🎭',
      color: 'from-purple-500 via-pink-500 to-red-600',
      experience: '1+ years',
      glow: 'shadow-purple-500/50'
    },

    // Backend
    {
      category: 'backend',
      name: 'Node.js',
      proficiency: 87,
      icon: '💚',
      color: 'from-green-500 via-emerald-600 to-green-700',
      experience: '3+ years',
      glow: 'shadow-green-500/50'
    },
    {
      category: 'backend',
      name: 'Express.js',
      proficiency: 85,
      icon: '🚂',
      color: 'from-gray-600 via-gray-700 to-gray-800',
      experience: '3+ years',
      glow: 'shadow-gray-700/50'
    },
    {
      category: 'backend',
      name: 'Python',
      proficiency: 80,
      icon: '🐍',
      color: 'from-yellow-400 via-yellow-500 to-blue-600',
      experience: '2+ years',
      glow: 'shadow-yellow-500/50'
    },
    {
      category: 'backend',
      name: 'FastAPI',
      proficiency: 75,
      icon: '⚡',
      color: 'from-green-400 via-emerald-500 to-teal-600',
      experience: '1+ years',
      glow: 'shadow-emerald-500/50'
    },

    // Database
    {
      category: 'database',
      name: 'MongoDB',
      proficiency: 85,
      icon: '🍃',
      color: 'from-green-500 via-green-600 to-green-700',
      experience: '3+ years',
      glow: 'shadow-green-600/50'
    },
    {
      category: 'database',
      name: 'PostgreSQL',
      proficiency: 78,
      icon: '🐘',
      color: 'from-blue-600 via-indigo-600 to-blue-700',
      experience: '2+ years',
      glow: 'shadow-blue-600/50'
    },
    {
      category: 'database',
      name: 'Redis',
      proficiency: 70,
      icon: '🔴',
      color: 'from-red-500 via-red-600 to-red-700',
      experience: '1+ years',
      glow: 'shadow-red-500/50'
    },

    // Tools
    {
      category: 'tools',
      name: 'Git & GitHub',
      proficiency: 90,
      icon: '🔧',
      color: 'from-gray-700 via-gray-800 to-black',
      experience: '3+ years',
      glow: 'shadow-gray-800/50'
    },
    {
      category: 'tools',
      name: 'Docker',
      proficiency: 75,
      icon: '🐳',
      color: 'from-blue-400 via-blue-500 to-blue-600',
      experience: '1+ years',
      glow: 'shadow-blue-500/50'
    },
    {
      category: 'tools',
      name: 'Vercel',
      proficiency: 85,
      icon: '🚀',
      color: 'from-black via-gray-900 to-gray-800',
      experience: '2+ years',
      glow: 'shadow-black/50'
    },
    {
      category: 'tools',
      name: 'Figma',
      proficiency: 80,
      icon: '🎨',
      color: 'from-purple-500 via-pink-500 to-orange-500',
      experience: '2+ years',
      glow: 'shadow-purple-500/50'
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

  const getSkillLevel = (proficiency: number) => {
    if (proficiency >= 90) return 'Expert';
    if (proficiency >= 80) return 'Advanced';
    if (proficiency >= 70) return 'Intermediate';
    return 'Beginner';
  };

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
        
        {/* Floating Tech Orbs */}
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

      {/* Tech Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      ></div>

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
                
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="skillCategoryGlow"
                    className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-50`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group relative"
                  initial={{ opacity: 0, y: 50, rotateY: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>
                  
                  <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-2xl shadow-lg ${skill.glow} group-hover:shadow-2xl transition-all duration-500`}>
                        {skill.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">{skill.experience}</div>
                        <div className="text-xs font-semibold text-cyan-400">
                          {getSkillLevel(skill.proficiency)}
                        </div>
                      </div>
                    </div>

                    {/* Skill Name */}
                    <h3 className="text-lg font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                      {skill.name}
                    </h3>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-400 mb-2">
                        <span>Proficiency</span>
                        <span>{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden backdrop-blur-xl border border-white/10">
                        <motion.div
                          className={`h-3 bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                          viewport={{ once: true }}
                        >
                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, delay: index * 0.1 + 1.5 }}
                          />
                        </motion.div>
                      </div>
                    </div>

                    {/* Hover Details */}
                    <AnimatePresence>
                      {hoveredSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-white/10 pt-4"
                        >
                          <div className="text-sm text-gray-400">
                            <div className="flex justify-between mb-2">
                              <span>Level:</span>
                              <span className="text-white">{getSkillLevel(skill.proficiency)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Experience:</span>
                              <span className="text-white">{skill.experience}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Learning Journey */}
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Continuous Learning & Innovation
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Technology evolves rapidly, and so do I. I'm constantly exploring emerging technologies, 
                mastering new frameworks, and pushing the boundaries of what's possible in web development.
              </p>
              
              {/* Learning Areas */}
              <div className="flex flex-wrap justify-center gap-4">
                {['AI/ML Integration', 'Web3 & Blockchain', 'Cloud Architecture', 'Mobile Development', 'DevOps & CI/CD'].map((learning, index) => (
                  <motion.span
                    key={index}
                    className="group relative px-6 py-3 bg-gradient-to-r from-violet-900/30 to-purple-900/30 backdrop-blur-xl border border-white/10 rounded-2xl text-white font-medium shadow-xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></span>
                      Currently Learning: {learning}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tech Philosophy */}
            <motion.div
              className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-violet-900/20 via-purple-900/20 to-indigo-900/20 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <SparklesIcon className="w-12 h-12 text-violet-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-4">My Development Philosophy</h4>
                <p className="text-gray-300 leading-relaxed">
                  "Great code is not just about making things work—it's about crafting elegant solutions 
                  that are maintainable, scalable, and deliver exceptional user experiences."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;