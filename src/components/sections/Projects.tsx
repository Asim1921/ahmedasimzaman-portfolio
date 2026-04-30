'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';

const Projects: React.FC = () => {
  const projects = useMemo(() => [
    {
      id: 1,
      category: "Event Management",
      title: "EventEase",
      description: "A comprehensive event management platform that simplifies event planning, registration, and coordination with real-time updates.",
      longDescription: "EventEase revolutionizes event management with AI-powered scheduling, automated notifications, and seamless payment integration. Built with modern microservices architecture.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "Socket.io"],
      imageUrl: "/images/projects/EaseUsPlatform.png",
      featured: true,
      status: "completed",
      gradient: "from-violet-500 via-purple-600 to-indigo-700",
    },
    {
      id: 2,
      category: "Local Commerce",
      title: "Clickgoffer",
      description:
        "A fullstack web platform for local commerce that replaces conventional full prepayment vouchers with a split-payment reservation model.",
      longDescription:
        "Clickgoffer is a fullstack platform for local commerce that replaces conventional full prepayment vouchers with a split-payment reservation model — reserve with a small deposit and pay the remaining balance later.",
      technologies: ["React", "TypeScript", "MongoDB", "Node.js"],
      imageUrl: "/images/projects/Clickgoffer.jpeg",
      featured: true,
      status: "completed",
      gradient: "from-amber-500 via-orange-600 to-rose-700",
    },
    {
      id: 4,
      category: "Web Application",
      title: "Portfolio Website",
      description: "This very website! Built with Next.js 14, featuring modern design and optimal performance with cutting-edge animations.",
      longDescription: "A showcase of modern web development featuring glassmorphism, advanced animations, and performance optimization. Built as a template for developers.",
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "MongoDB"],
      imageUrl: "/images/projects/portfolio.png",
      featured: false,
      status: "completed",
      gradient: "from-blue-500 via-indigo-600 to-purple-700",
    },
    {
      id: 5,
      category: "Backend API",
      title: "Vibely",
      description: "A comprehensive REST API for a social media platform with authentication, posts, comments, likes, and real-time features.",
      longDescription: "A full-featured social media backend built with Node.js and Express, featuring JWT authentication, MongoDB integration, file uploads, email services, and comprehensive middleware for security and validation.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt", "Nodemailer", "Cloudinary"],
      imageUrl: "/images/projects/social-media.png",
      featured: true,
      status: "completed",
      gradient: "from-green-500 via-emerald-600 to-teal-700",
    },
    {
      id: 6,
      category: "CRM System",
      title: "CRM System",
      description: "A comprehensive Customer Relationship Management system with advanced analytics, automation, and multi-channel communication.",
      longDescription: "Enterprise-grade CRM system featuring lead management, sales pipeline tracking, customer analytics, automated workflows, email marketing integration, and real-time reporting dashboards.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Socket.io", "Chart.js", "SendGrid", "AWS S3"],
      imageUrl: "/images/projects/communication.png",
      featured: true,
      status: "completed",
      gradient: "from-orange-500 via-red-600 to-pink-700",
    },
  ], []);

  return (
    <section id="projects" className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-indigo-900/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              A showcase of innovative applications built to solve real-world problems and create meaningful digital impact
            </motion.p>
          </div>

          {/* Projects Grid (lighter + faster than carousel) */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: Math.min(idx * 0.05, 0.25) }}
                viewport={{ once: true }}
                className="group relative rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.gradient} blur-2xl`} />

                <div className="relative">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-black/50 border border-white/15 text-gray-100 backdrop-blur-xl">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 border border-white/15 text-white backdrop-blur-xl">
                          Featured
                        </span>
                      )}
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-200 backdrop-blur-xl">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <details className="group/details">
                      <summary className="cursor-pointer select-none text-sm font-semibold text-violet-300 hover:text-violet-200 transition-colors">
                        More details
                      </summary>
                      <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                        {project.longDescription}
                      </p>
                    </details>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 6).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-400">
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
