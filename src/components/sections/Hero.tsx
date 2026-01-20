'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDownIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import MagicButton from '@/components/ui/MagicButton';
import AnimatedGradientText from '@/components/ui/AnimatedGradientText';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
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
    { name: 'Next.js', icon: '▲', color: 'from-gray-900 via-black to-gray-800' },
    { name: 'React', icon: '⚛', color: 'from-cyan-500 via-blue-500 to-indigo-600' },
    { name: 'Node.js', icon: '⬢', color: 'from-green-500 via-emerald-500 to-teal-600' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-600 via-green-500 to-lime-600' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/50 via-purple-950/30 to-indigo-950/50" />
        
        {/* Animated orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          
          {/* Left Side - Profile Image with Modern Design */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Animated border glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
              
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Glassmorphic border */}
                <div className="absolute -inset-2 bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-indigo-500/30 rounded-full backdrop-blur-xl border border-white/10 p-1">
                  <div className="w-full h-full bg-black/50 rounded-full" />
                </div>
                
                {/* Profile Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl group-hover:border-purple-500/50 transition-all duration-500">
                  <Image
                    src="/images/dp.jpg"
                    alt="Ahmed Asim Zaman"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {/* Animated Gradient Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <AnimatedGradientText>
                Full Stack Developer
              </AnimatedGradientText>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Ahmed Asim
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
                Zaman
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Crafting the future of web with cutting-edge technologies. From{' '}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-semibold">EventEase</span> to{' '}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text font-semibold">VolunteerMe</span>, 
              I build digital experiences that push boundaries and create impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Link href="#projects">
                <MagicButton>
                  Explore My Work
                  <ChevronDownIcon className="w-5 h-5 ml-2 inline" />
                </MagicButton>
              </Link>
              
              <Link
                href="/api/resume"
                className="group relative px-8 py-4 bg-black/40 backdrop-blur-xl text-white font-bold rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-500 shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  Download Resume
                </span>
              </Link>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div 
              className="grid grid-cols-4 gap-4 max-w-md mx-auto lg:mx-0 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className={cn(
                    "relative p-4 bg-gradient-to-br rounded-xl shadow-xl border border-white/10 backdrop-blur-xl transition-all duration-500",
                    tech.color
                  )}>
                    <div className="text-center mb-1">
                      <span className="text-2xl font-bold text-white drop-shadow-lg">
                        {tech.icon}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="text-xs font-semibold text-white/90">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="flex flex-col items-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">
            Scroll to explore
          </span>
          <motion.button 
            onClick={scrollToAbout}
            className="p-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-white hover:bg-white/10 transition-all duration-500 shadow-xl group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronDownIcon className="w-6 h-6 group-hover:text-violet-400 transition-colors duration-300" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
