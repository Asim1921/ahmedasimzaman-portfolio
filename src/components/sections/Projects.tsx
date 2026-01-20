'use client';

import React, { useMemo } from 'react';
import { Carousel, Card as ProjectCard } from '@/components/ui/apple-cards-carousel';
import { motion } from 'framer-motion';
import { CodeBracketIcon, EyeIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

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
      githubUrl: "https://github.com/ahmedasimzaman/eventease",
      liveUrl: "https://eventease-demo.com",
      featured: true,
      status: "completed",
      gradient: "from-violet-500 via-purple-600 to-indigo-700",
    },
    {
      id: 2,
      category: "Community Platform",
      title: "VolunteerMe",
      description: "A platform connecting volunteers with organizations, making community service more accessible and impactful.",
      longDescription: "VolunteerMe uses machine learning to match volunteers with opportunities based on skills, location, and interests. Features real-time chat and impact tracking.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "WebRTC"],
      imageUrl: "/images/projects/volunteerME.png",
      githubUrl: "https://github.com/ahmedasimzaman/volunteerme",
      liveUrl: "https://volunteerme-demo.com",
      featured: true,
      status: "completed",
      gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    },
    {
      id: 3,
      category: "AI Application",
      title: "Mental Health Chatbot",
      description: "An AI-powered chatbot providing mental health support and resources with empathetic conversation capabilities.",
      longDescription: "Advanced NLP-powered chatbot with sentiment analysis, crisis detection, and personalized therapy recommendations. Integrated with licensed therapist network.",
      technologies: ["Python", "OpenAI API", "React", "FastAPI", "Docker", "TensorFlow"],
      imageUrl: "/images/projects/mental-wellness.png",
      githubUrl: "https://github.com/Asim1921/mental-wellness-chatbot",
      liveUrl: "https://mental-wellness-chatbot.vercel.app/",
      featured: true,
      status: "in-progress",
      gradient: "from-rose-500 via-pink-600 to-purple-700",
    },
    {
      id: 4,
      category: "Web Application",
      title: "Portfolio Website",
      description: "This very website! Built with Next.js 14, featuring modern design and optimal performance with cutting-edge animations.",
      longDescription: "A showcase of modern web development featuring glassmorphism, advanced animations, and performance optimization. Built as a template for developers.",
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "MongoDB"],
      imageUrl: "/images/projects/portfolio.png",
      githubUrl: "https://github.com/Asim1921/ahmedasimzaman-portfolio",
      liveUrl: "https://ahmedasimzaman-portfolio.vercel.app/",
      featured: false,
      status: "completed",
      gradient: "from-blue-500 via-indigo-600 to-purple-700",
    },
    {
      id: 5,
      category: "Backend API",
      title: "Social Media Backend",
      description: "A comprehensive REST API for a social media platform with authentication, posts, comments, likes, and real-time features.",
      longDescription: "A full-featured social media backend built with Node.js and Express, featuring JWT authentication, MongoDB integration, file uploads, email services, and comprehensive middleware for security and validation.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt", "Nodemailer", "Cloudinary"],
      imageUrl: "/images/projects/social-media.png",
      githubUrl: "https://github.com/Asim1921/social-media-frontend",
      liveUrl: "https://social-media-frontend-rose.vercel.app/",
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
      githubUrl: "https://github.com/ahmedasimzaman/Communication.png",
      liveUrl: "https://www.crmama.com.mx/",
      featured: true,
      status: "completed",
      gradient: "from-orange-500 via-red-600 to-pink-700",
    },
  ], []);

  const projectCards = projects.map((project) => (
    <ProjectCard
      key={project.id}
      card={{
        category: project.category,
        title: project.title,
        src: project.imageUrl,
        content: (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{project.longDescription}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white text-sm rounded-full border border-white/10 backdrop-blur-xl`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 bg-black/30 backdrop-blur-xl text-gray-300 rounded-xl border border-white/10 hover:border-white/20 hover:text-white transition-all duration-200 text-center text-sm font-medium"
              >
                <span className="flex items-center justify-center gap-2">
                  <CodeBracketIcon className="w-4 h-4" />
                  View Code
                </span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-lg transition-all duration-200 text-center text-sm font-medium`}
              >
                <span className="flex items-center justify-center gap-2">
                  <EyeIcon className="w-4 h-4" />
                  Live Demo
                </span>
              </a>
            </div>
          </div>
        ),
      }}
      index={project.id}
    />
  ));

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

          {/* Projects Carousel */}
          <div className="w-full py-20">
            <Carousel items={projectCards} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
