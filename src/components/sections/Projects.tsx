'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CodeBracketIcon, 
  EyeIcon, 
  CalendarIcon,
  UsersIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "EventEase",
      description: "A comprehensive event management platform that simplifies event planning, registration, and coordination with real-time updates.",
      longDescription: "EventEase revolutionizes event management with AI-powered scheduling, automated notifications, and seamless payment integration. Built with modern microservices architecture.",
      category: "web-app",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "Socket.io"],
      imageUrl: "/images/projects/EaseUsPlatform.png",
      githubUrl: "https://github.com/ahmedasimzaman/eventease",
      liveUrl: "https://eventease-demo.com",
      featured: true,
      status: "completed",
      startDate: "2023-06",
      endDate: "2023-09",
      metrics: {
        users: "500+",
        performance: "99.9% uptime",
        impact: "Reduced event planning time by 60%"
      },
      gradient: "from-violet-500 via-purple-600 to-indigo-700",
      glowColor: "violet"
    },
    {
      id: 2,
      title: "VolunteerMe",
      description: "A platform connecting volunteers with organizations, making community service more accessible and impactful.",
      longDescription: "VolunteerMe uses machine learning to match volunteers with opportunities based on skills, location, and interests. Features real-time chat and impact tracking.",
      category: "web-app",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "WebRTC"],
      imageUrl: "/images/projects/volunteerME.png",
      githubUrl: "https://github.com/ahmedasimzaman/volunteerme",
      liveUrl: "https://volunteerme-demo.com",
      featured: true,
      status: "completed",
      startDate: "2023-10",
      endDate: "2024-01",
      metrics: {
        users: "300+",
        impact: "Connected 1000+ volunteer hours"
      },
      gradient: "from-emerald-500 via-teal-600 to-cyan-700",
      glowColor: "emerald"
    },
    {
      id: 3,
      title: "Mental Health Chatbot",
      description: "An AI-powered chatbot providing mental health support and resources with empathetic conversation capabilities.",
      longDescription: "Advanced NLP-powered chatbot with sentiment analysis, crisis detection, and personalized therapy recommendations. Integrated with licensed therapist network.",
      category: "ai-app",
      technologies: ["Python", "OpenAI API", "React", "FastAPI", "Docker", "TensorFlow"],
      imageUrl: "/images/projects/mental-wellness.png",
      githubUrl: "https://github.com/ahmedasimzaman/mental-health-chatbot",
      liveUrl: "https://mentalhealth-bot-demo.com",
      featured: true,
      status: "in-progress",
      startDate: "2024-02",
      metrics: {
        users: "200+",
        impact: "24/7 mental health support"
      },
      gradient: "from-rose-500 via-pink-600 to-purple-700",
      glowColor: "rose"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "This very website! Built with Next.js 14, featuring modern design and optimal performance with cutting-edge animations.",
      longDescription: "A showcase of modern web development featuring glassmorphism, advanced animations, and performance optimization. Built as a template for developers.",
      category: "web-app",
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "MongoDB"],
      imageUrl: "/images/projects/portfolio.png",
      githubUrl: "https://github.com/ahmedasimzaman/portfolio",
      liveUrl: "https://ahmedasimzaman.com",
      featured: false,
      status: "completed",
      startDate: "2024-06",
      endDate: "2024-06",
      gradient: "from-blue-500 via-indigo-600 to-purple-700",
      glowColor: "blue"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: SparklesIcon, count: projects.length },
    { id: 'web-app', label: 'Web Apps', icon: CodeBracketIcon, count: projects.filter(p => p.category === 'web-app').length },
    { id: 'ai-app', label: 'AI Projects', icon: ChartBarIcon, count: projects.filter(p => p.category === 'ai-app').length },
    { id: 'mobile-app', label: 'Mobile Apps', icon: RocketLaunchIcon, count: projects.filter(p => p.category === 'mobile-app').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'from-green-500 to-emerald-600';
      case 'in-progress': return 'from-yellow-500 to-orange-600';
      default: return 'from-blue-500 to-indigo-600';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      default: return 'Planned';
    }
  };

  return (
    <section id="projects" className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-indigo-900/20"></div>
        
        {/* Dynamic Orbs */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Mesh Grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
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
                <RocketLaunchIcon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
            </motion.div>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A showcase of innovative applications built to solve real-world problems and create meaningful digital impact
            </motion.p>
          </div>

          {/* Enhanced Project Filter */}
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
                onClick={() => setActiveFilter(category.id)}
                className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-500 border backdrop-blur-xl ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white border-white/20 shadow-2xl shadow-purple-500/50'
                    : 'bg-black/30 text-gray-300 hover:text-white border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.label}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  activeFilter === category.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-purple-500/20 text-purple-300'
                }`}>
                  {category.count}
                </span>
                
                {/* Glow effect */}
                {activeFilter === category.id && (
                  <motion.div
                    layoutId="categoryGlow"
                    className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur opacity-50"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              className="grid lg:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  whileHover={{ y: -10 }}
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>
                  
                  <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+hBOEdDCdMNvh/wg9v"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(project.status)} text-white text-xs font-semibold rounded-full shadow-lg`}>
                          {getStatusLabel(project.status)}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                            <SparklesIcon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      )}

                      {/* Hover Actions */}
                      <AnimatePresence>
                        {hoveredProject === project.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                          >
                            <div className="flex gap-4">
                              <motion.a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/20 backdrop-blur-xl rounded-full text-white hover:bg-white/30 transition-all duration-300 border border-white/20"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <CodeBracketIcon className="w-6 h-6" />
                              </motion.a>
                              <motion.a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/20 backdrop-blur-xl rounded-full text-white hover:bg-white/30 transition-all duration-300 border border-white/20"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <PlayIcon className="w-6 h-6" />
                              </motion.a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Project Content */}
                    <div className="p-8 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-400 leading-relaxed mb-4">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white text-sm rounded-full border border-white/10 backdrop-blur-xl`}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-white/10">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Project Metrics */}
                      {project.metrics && (
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                          {project.metrics.users && (
                            <div className="flex items-center gap-2">
                              <UsersIcon className="w-4 h-4 text-cyan-400" />
                              <span>{project.metrics.users}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="w-4 h-4 text-purple-400" />
                            <span>{project.startDate}</span>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-3 bg-black/30 backdrop-blur-xl text-gray-300 rounded-xl border border-white/10 hover:border-white/20 hover:text-white transition-all duration-300 text-center text-sm font-medium group/btn"
                        >
                          <span className="flex items-center justify-center gap-2">
                            <CodeBracketIcon className="w-4 h-4 group-hover/btn:text-violet-400 transition-colors" />
                            Code
                          </span>
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-lg transition-all duration-300 text-center text-sm font-medium group/btn overflow-hidden relative`}
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <EyeIcon className="w-4 h-4" />
                            Live Demo
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* View All Projects Button */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-bold rounded-2xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-400/70 transition-all duration-500 border border-white/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <span className="relative z-10">View All Projects</span>
              <svg className="relative z-10 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;