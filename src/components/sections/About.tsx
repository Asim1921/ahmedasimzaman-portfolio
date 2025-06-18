'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ResumeDownload from '@/components/ui/ResumeDownload';
import { ArrowDownTrayIcon, MapPinIcon, CalendarIcon, SparklesIcon, CodeBracketIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const experiences = [
    {
      title: "Research Assistant",
      company: "HEC (Higher Education Commission)",
      period: " Aug 2023 -  June 2024",
      description: "Leading educational technology research and development project, contributing to innovative learning solutions and academic excellence.",
      skills: ["Research", "Data Analysis", "Educational Technology", "Academic Writing", "Machine Learning", "Human Pose Estimation"],
      gradient: "from-emerald-500 to-teal-600",
      glow: "shadow-emerald-500/50"
    },
    {
      title: "Developer",
      company: "Meta-Dao",
      period: "July 2024 - Jan 2025", 
      description: "Building cutting-edge decentralized applications and contributing to blockchain ecosystem development with modern web technologies.",
      skills: [".Net", "Blazor Framework", "MVC", "SSMS", "Swagger", "Postman"],
      gradient: "from-violet-500 to-purple-600",
      glow: "shadow-violet-500/50"
    }
  ];

  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "University of Technology",
      period: "2020 - 2024",
      gpa: "3.8/4.0",
      gradient: "from-blue-500 to-indigo-600",
      achievements: ["Dean's List", "Programming Excellence Award", "Final Year Project: AI-Powered System"]
    }
  ];

  const stats = [
    { label: "Years Experience", value: "2+", icon: CalendarIcon, color: "from-cyan-500 to-blue-600" },
    { label: "Projects Completed", value: "15+", icon: CodeBracketIcon, color: "from-purple-500 to-pink-600" },
    { label: "Technologies", value: "20+", icon: SparklesIcon, color: "from-emerald-500 to-teal-600" },
    { label: "Happy Clients", value: "50+", icon: AcademicCapIcon, color: "from-orange-500 to-red-600" },
  ];

  return (
    <section id="about" className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-indigo-900/20"></div>
        
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"
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

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
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
                <SparklesIcon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                About Me
              </h2>
            </motion.div>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Passionate innovator crafting digital experiences that bridge cutting-edge technology with real-world impact
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Enhanced Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative group">
                {/* Glow Effects */}
                <div className="absolute -inset-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
                
                {/* Main Image Container */}
                <div className="relative w-full max-w-md mx-auto">
                  <div className="aspect-square rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-400/50 transition-all duration-500 bg-gradient-to-br from-violet-900/20 to-purple-900/20 backdrop-blur-xl">
                    <Image
                      src="/images/about-photo.jpg"
                      alt="Ahmed Asim Zaman"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+hBOEdDCdMNvh/wg9v"
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center animate-pulse">
                    <CodeBracketIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center animate-pulse">
                    <SparklesIcon className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <motion.div 
                className="grid grid-cols-2 gap-4 mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`relative p-4 bg-gradient-to-br ${stat.color} rounded-2xl shadow-xl border border-white/10 backdrop-blur-xl group-hover:shadow-2xl transition-all duration-500`}>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20 rounded-xl">
                          <stat.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">{stat.value}</div>
                          <div className="text-sm text-white/80">{stat.label}</div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
                  Full Stack Developer & Innovation Enthusiast
                </h3>
                <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                  <p>
                    I'm Ahmed Asim Zaman, a passionate full-stack developer with a strong foundation in modern web technologies. 
                    My journey in tech is driven by a desire to create meaningful digital experiences that solve real-world problems.
                  </p>
                  <p>
                    Currently working as a Research Assistant at HEC and contributing to Meta-Dao projects, I bring both 
                    academic rigor and practical development experience to every project I undertake.
                  </p>
                  <p>
                    My expertise spans the entire development stack, from crafting intuitive user interfaces with React and Next.js 
                    to building robust backend systems with Node.js and MongoDB. I'm particularly passionate about creating 
                    applications that make a positive impact on communities.
                  </p>
                </div>
              </div>

              {/* Location & Contact Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl border border-cyan-500/20 backdrop-blur-xl">
                  <div className="p-2 bg-cyan-500/20 rounded-xl">
                    <MapPinIcon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-cyan-400 font-semibold">Location</div>
                    <div className="text-white">Islamabad, Pakistan</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/20 backdrop-blur-xl">
                  <div className="p-2 bg-purple-500/20 rounded-xl">
                    <CalendarIcon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-purple-400 font-semibold">Experience</div>
                    <div className="text-white">2+ Years</div>
                  </div>
                </div>
              </div>

              {/* Resume Button */}
              <div className="pt-4">
               <ResumeDownload variant="card" showPreview={true} />
              </div>
            </motion.div>
          </div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-16">
              Professional Experience
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                  whileHover={{ y: -5 }}
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${exp.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500">
                    <div className="mb-6">
                      <h4 className="text-2xl font-bold text-white mb-2">{exp.title}</h4>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.period}</p>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 bg-gradient-to-r ${exp.gradient} bg-opacity-20 border border-white/10 text-white text-sm rounded-full backdrop-blur-xl`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-12">
              Education
            </h3>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="group relative max-w-4xl mx-auto"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${edu.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>{edu.institution}</p>
                      <p className="text-gray-400">{edu.period}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className={`inline-block px-6 py-3 bg-gradient-to-r ${edu.gradient} bg-opacity-20 border border-white/10 text-white rounded-2xl font-bold backdrop-blur-xl`}>
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-3">
                    {edu.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center gap-2 text-gray-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${edu.gradient} rounded-full`}></div>
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;