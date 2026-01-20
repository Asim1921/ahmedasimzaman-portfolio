'use client';

import React from 'react';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { motion } from 'framer-motion';
import { SparklesIcon, CodeBracketIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const Experience: React.FC = () => {
  const content = [
    {
      title: "Research Assistant at HEC",
      description:
        "Leading educational technology research and development project, contributing to innovative learning solutions and academic excellence. Worked on cutting-edge machine learning applications for human pose estimation and educational data analysis. Collaborated with academic teams to develop research papers and present findings at conferences.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white rounded-lg p-8">
          <div className="text-center">
            <AcademicCapIcon className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Research & Innovation</h3>
            <p className="text-lg opacity-90">Aug 2023 - June 2024</p>
          </div>
        </div>
      ),
    },
    {
      title: "Developer at Meta-Dao",
      description:
        "Building cutting-edge decentralized applications and contributing to blockchain ecosystem development with modern web technologies. Developed robust backend systems using .NET framework, implemented RESTful APIs, and designed scalable database architectures. Worked in agile development environment, delivering high-quality software solutions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--violet-500))] text-white rounded-lg p-8">
          <div className="text-center">
            <CodeBracketIcon className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Blockchain Development</h3>
            <p className="text-lg opacity-90">July 2024 - Jan 2025</p>
          </div>
        </div>
      ),
    },
    {
      title: "Full Stack Projects",
      description:
        "Developed EventEase - an innovative event management platform, and VolunteerMe - a community engagement application. Built using Next.js, React, Node.js, and MongoDB. These projects showcase my ability to create end-to-end solutions that solve real-world problems and make a positive impact on communities.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white rounded-lg p-8">
          <div className="text-center">
            <SparklesIcon className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Full Stack Solutions</h3>
            <p className="text-lg opacity-90">2023 - Present</p>
          </div>
        </div>
      ),
    },
    {
      title: "Skills & Technologies",
      description:
        "Proficient in modern web development stack including React, Next.js, TypeScript, Node.js, MongoDB, and PostgreSQL. Experienced in cloud platforms like Vercel and AWS. Strong understanding of UI/UX principles, responsive design, and performance optimization. Continuously learning and adapting to new technologies.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white rounded-lg p-8">
          <div className="text-center">
            <CodeBracketIcon className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Tech Stack Mastery</h3>
            <p className="text-lg opacity-90">20+ Technologies</p>
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
        
        <motion.div 
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
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

