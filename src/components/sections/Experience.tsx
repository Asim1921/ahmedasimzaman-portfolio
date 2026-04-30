'use client';

import React from 'react';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { motion } from 'framer-motion';
import { SparklesIcon, CodeBracketIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const Experience: React.FC = () => {
  const content = [
    {
      title: "Full Stack Web Developer — inoTech Solutions",
      description:
        "Co-leading frontend development of CyberRange — an enterprise cybersecurity training platform — using React.js and Next.js. Built 10+ Tailwind UI components, improved accessibility, and integrated FastAPI endpoints for challenge orchestration and scoring.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white rounded-lg p-8">
          <div className="text-center">
            <CodeBracketIcon className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">React + Next.js</h3>
            <p className="text-lg opacity-90">Nov 2025 – Present</p>
          </div>
        </div>
      ),
    },
    {
      title: "Software Engineer — Komatsu Pakistan Soft",
      description:
        "Developed enterprise web apps with .NET Core, C#, EF Core, and Angular for 500+ internal users. Implemented scalable REST APIs and optimized SQL Server queries, reducing response times (~30%) and improving report performance on high-volume datasets.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--violet-500))] text-white rounded-lg p-8">
          <div className="text-center">
            <CodeBracketIcon className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">.NET + Angular</h3>
            <p className="text-lg opacity-90">Jul 2025 – Oct 2025</p>
          </div>
        </div>
      ),
    },
    {
      title: "Developer — Meta-Dao",
      description:
        "Built decentralized applications and contributed to blockchain ecosystem development. Developed backend services with .NET, implemented RESTful APIs, and designed scalable database architectures in an Agile environment.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white rounded-lg p-8">
          <div className="text-center">
            <CodeBracketIcon className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Web3 + APIs</h3>
            <p className="text-lg opacity-90">Jul 2024 – Jan 2025</p>
          </div>
        </div>
      ),
    },
    {
      title: "Research Assistant — HEC",
      description:
        "Led educational technology R&D and worked on machine learning applications for pose estimation and educational data analysis. Collaborated with academic teams on research outputs and presentations.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white rounded-lg p-8">
          <div className="text-center">
            <AcademicCapIcon className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Research & ML</h3>
            <p className="text-lg opacity-90">Aug 2023 - June 2024</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-indigo-900/20"></div>
        
        {/* Static blobs (animation removed for performance) */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/15 to-pink-600/15 rounded-full blur-3xl" />
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
                <SparklesIcon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Experience
              </h2>
            </motion.div>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A journey through innovation, research, and development
            </motion.p>
          </div>

          {/* Sticky Scroll Reveal */}
          <div className="w-full">
            <StickyScroll content={content} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

