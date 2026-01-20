'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/moving-border';
import { Card, CardTitle, CardDescription, CardSkeletonContainer, Skeleton } from '@/components/ui/modern-card';
import { 
  MapPinIcon, 
  CalendarIcon, 
  SparklesIcon, 
  CodeBracketIcon, 
  AcademicCapIcon,
  BriefcaseIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const experiences = [
    {
      title: "Research Assistant",
      company: "HEC (Higher Education Commission)",
      period: "Aug 2023 - June 2024",
      description: "Leading educational technology research and development project, contributing to innovative learning solutions and academic excellence.",
      skills: ["Research", "Data Analysis", "Educational Technology", "Academic Writing", "Machine Learning"],
      icon: <AcademicCapIcon className="h-6 w-6 dark:text-white" />,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Developer",
      company: "Meta-Dao",
      period: "July 2024 - Jan 2025", 
      description: "Building cutting-edge decentralized applications and contributing to blockchain ecosystem development with modern web technologies.",
      skills: [".Net", "Blazor Framework", "MVC", "SSMS", "Swagger"],
      icon: <CodeBracketIcon className="h-6 w-6 dark:text-white" />,
      gradient: "from-violet-500 to-purple-600",
    }
  ];

  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "University of Engineering & Technology (UET Taxila)",
      period: "2020 - 2024",
      gpa: "3.57/4.0",
      achievements: ["Dean's List", "Programming Excellence Award", "Final Year Project: AI-Powered System"],
      icon: <AcademicCapIcon className="h-6 w-6 dark:text-white" />,
    }
  ];

  const stats = [
    { label: "Years Experience", value: "2+", icon: CalendarIcon, gradient: "from-cyan-500 to-blue-600" },
    { label: "Projects Completed", value: "15+", icon: CodeBracketIcon, gradient: "from-purple-500 to-pink-600" },
    { label: "Technologies", value: "20+", icon: SparklesIcon, gradient: "from-emerald-500 to-teal-600" },
    { label: "Happy Clients", value: "50+", icon: AcademicCapIcon, gradient: "from-orange-500 to-red-600" },
  ];

  return (
    <section id="about" className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-purple-900/20 to-indigo-900/30"></div>
        
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
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
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
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
          <div className="text-center mb-24">
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

          {/* Main Content - Split Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            {/* Left Side - Image with Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Profile Image Card */}
              <motion.div
                className="relative group mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -inset-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
                
                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-400/50 transition-all duration-500 bg-gradient-to-br from-violet-900/20 to-purple-900/20 backdrop-blur-xl">
                    <Image
                      src="/images/about-photo.jpg"
                      alt="Ahmed Asim Zaman"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+hBOEdDCdMNvh/wg9v"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className={`p-6 bg-gradient-to-br ${stat.gradient} bg-opacity-10 border-${stat.gradient.split('-')[1]}-500/30`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 bg-gradient-to-r ${stat.gradient} rounded-lg bg-opacity-20`}>
                          <stat.icon className={`w-6 h-6 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`} />
                        </div>
                        <div>
                          <div className="text-3xl font-black text-white">{stat.value}</div>
                          <div className="text-xs text-gray-300 font-medium">{stat.label}</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Bio and Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Name and Title */}
              <div>
                <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-4">
                  Ahmed Asim Zaman
                </h3>
                <p className="text-2xl text-violet-400 font-semibold mb-6">
                  Full Stack Developer & Innovation Enthusiast
                </p>
              </div>

              {/* Bio */}
              <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                <p>
                  I'm a passionate full-stack developer with a strong foundation in modern web technologies. 
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

              {/* Location and Experience Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-5 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-500/20 rounded-xl">
                      <MapPinIcon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-cyan-400 font-semibold text-sm">Location</div>
                      <div className="text-white font-medium">Islamabad, Pakistan</div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-5 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-xl">
                      <CalendarIcon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-purple-400 font-semibold text-sm">Experience</div>
                      <div className="text-white font-medium">2+ Years</div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Resume Download Button */}
              <div className="pt-4">
                <a href="/api/resume" download>
                  <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <ArrowDownTrayIcon className="w-5 h-5" />
                      <span>Download Resume</span>
                    </div>
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-16">
              Professional Experience
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="h-full hover:border-violet-500/50 transition-all duration-500">
                    <CardSkeletonContainer>
                      <Skeleton>
                        {exp.icon}
                      </Skeleton>
                    </CardSkeletonContainer>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <CardDescription className={`text-base font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent mb-2`}>
                      {exp.company}
                    </CardDescription>
                    <CardDescription className="text-gray-400 text-xs mb-4">
                      {exp.period}
                    </CardDescription>
                    <CardDescription className="mb-6">
                      {exp.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1.5 bg-gradient-to-r ${exp.gradient} bg-opacity-20 border border-white/10 text-white text-xs rounded-full backdrop-blur-xl font-medium`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
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
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-16">
              Education
            </h3>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="hover:border-cyan-500/50 transition-all duration-500">
                  <CardSkeletonContainer>
                    <Skeleton>
                      {edu.icon}
                    </Skeleton>
                  </CardSkeletonContainer>
                  <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                  <CardDescription className="text-base font-semibold text-cyan-400 mb-2">
                    {edu.institution}
                  </CardDescription>
                  <CardDescription className="text-gray-400 text-sm mb-6">
                    {edu.period} • GPA: {edu.gpa}
                  </CardDescription>
                  <div className="space-y-3">
                    {edu.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg border border-cyan-500/20">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
