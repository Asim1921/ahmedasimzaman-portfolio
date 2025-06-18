'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDownIcon, ArrowDownTrayIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const techStack = [
    { 
      name: 'Next.js', 
      icon: '▲', 
      color: 'from-gray-900 via-black to-gray-800',
      glow: 'shadow-gray-500/50',
      delay: 0.1
    },
    { 
      name: 'React', 
      icon: '⚛', 
      color: 'from-cyan-500 via-blue-500 to-indigo-600',
      glow: 'shadow-cyan-500/50',
      delay: 0.2
    },
    { 
      name: 'Node.js', 
      icon: '⬢', 
      color: 'from-green-500 via-emerald-500 to-teal-600',
      glow: 'shadow-green-500/50',
      delay: 0.3
    },
    { 
      name: 'MongoDB', 
      icon: '🍃', 
      color: 'from-green-600 via-green-500 to-lime-600',
      glow: 'shadow-green-600/50',
      delay: 0.4
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-indigo-900/40"></div>
        
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/30 to-purple-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/30 to-blue-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-500/30 to-pink-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Dynamic Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}
      ></div>

      {/* Mouse Follow Effect */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-violet-500/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Side - Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -100, rotateY: -90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Outer glow rings */}
              <div className="absolute -inset-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-500 animate-pulse"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-all duration-700 animate-pulse delay-500"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Border rings */}
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 via-purple-600 to-indigo-600 rounded-full p-1 shadow-2xl shadow-purple-500/50">
                  <div className="w-full h-full bg-black rounded-full p-1">
                    <div className="w-full h-full bg-gradient-to-r from-violet-400 to-purple-500 rounded-full p-1">
                      <div className="w-full h-full bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/50 group-hover:shadow-purple-400/70 transition-all duration-500">
                  <Image
                    src="/images/profile.jpg"
                    alt="Ahmed Asim Zaman"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+hBOEdDCdMNvh/wg9v"
                  />
                </div>
                
                {/* Floating particles */}
                <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <SparklesIcon className="w-8 h-8 text-violet-400 animate-pulse" />
                </div>
                <div className="absolute -bottom-4 -left-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <SparklesIcon className="w-6 h-6 text-purple-400 animate-pulse" />
                </div>
                <div className="absolute top-8 -left-6 opacity-0 group-hover:opacity-100 transition-all duration-600">
                  <SparklesIcon className="w-5 h-5 text-cyan-400 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            {/* Name with Holographic Effect */}
            <div>
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              >
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent blur-sm opacity-50"></span>
                  <span className="relative bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Ahmed Asim
                  </span>
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent blur-sm opacity-50"></span>
                  <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Zaman
                  </span>
                </span>
              </motion.h1>
              
              {/* Animated Role Tags */}
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
              >
                {['Full Stack Developer', 'Next.js Specialist', 'UI/UX Enthusiast'].map((role, index) => (
                  <motion.span
                    key={role}
                    className="px-4 py-2 bg-gradient-to-r from-violet-900/30 to-purple-900/30 backdrop-blur-xl border border-white/10 rounded-full text-white font-medium shadow-2xl shadow-purple-500/20 text-sm lg:text-base"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  >
                    {role}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
            >
              Crafting the future of web with cutting-edge technologies. From 
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-semibold"> EventEase</span> to 
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text font-semibold"> VolunteerMe</span>, 
              I build digital experiences that push boundaries and create impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
            >
              <Link
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-bold rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/50 hover:shadow-purple-400/70 transition-all duration-500 border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore My Work
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </Link>
              
              <Link
                href="/api/resume"
                className="group relative px-8 py-4 bg-black/30 backdrop-blur-xl text-white font-bold rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-500 shadow-xl shadow-black/50"
              >
                <span className="flex items-center justify-center gap-2">
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            </motion.div>

            {/* Tech Stack */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="group relative"
                  initial={{ opacity: 0, y: 20, rotateY: -90 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 + tech.delay }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`relative p-4 bg-gradient-to-br ${tech.color} rounded-2xl shadow-2xl ${tech.glow} group-hover:shadow-2xl transition-all duration-500 border border-white/10 backdrop-blur-xl`}>
                    <div className="text-center mb-2">
                      <span className="text-2xl font-bold text-white drop-shadow-lg">
                        {tech.icon}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="text-xs font-semibold text-white/90">
                        {tech.name}
                      </span>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Centered */}
        <motion.div 
          className="flex flex-col items-center gap-4 mt-12 lg:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">
            Scroll to explore
          </span>
          <motion.button 
            onClick={scrollToAbout}
            className="p-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-white hover:bg-white/10 transition-all duration-500 shadow-xl shadow-purple-500/20 group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronDownIcon className="w-6 h-6 group-hover:text-violet-400 transition-colors duration-300" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-violet-500/10 to-purple-600/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-indigo-500/10 to-blue-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      {/* CSS for grid animation */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;