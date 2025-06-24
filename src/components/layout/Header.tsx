'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ResumeDownload from '@/components/ui/ResumeDownload';
import { 
  Bars3Icon, 
  XMarkIcon,
  DocumentArrowDownIcon,
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  CogIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const header = document.getElementById('main-header');
      if (header) {
        const rect = header.getBoundingClientRect();
        setMousePosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { 
      name: 'Home', 
      href: '#hero', 
      icon: HomeIcon,
      section: 'hero',
      glow: 'from-violet-400 via-purple-500 to-indigo-600',
      type: 'scroll'
    },
    { 
      name: 'About', 
      href: '#about', 
      icon: UserIcon,
      section: 'about',
      glow: 'from-emerald-400 via-teal-500 to-cyan-600',
      type: 'scroll'
    },
    { 
      name: 'Projects', 
      href: '#projects', 
      icon: BriefcaseIcon,
      section: 'projects',
      glow: 'from-rose-400 via-pink-500 to-red-600',
      type: 'scroll'
    },
    { 
      name: 'Skills', 
      href: '#skills', 
      icon: CogIcon,
      section: 'skills',
      glow: 'from-amber-400 via-orange-500 to-yellow-600',
      type: 'scroll'
    },
    { 
      name: 'Blog', 
      href: '/blog', 
      icon: DocumentTextIcon,
      section: 'blog',
      glow: 'from-green-400 via-lime-500 to-emerald-600',
      type: 'link'
    },
    { 
      name: 'Contact', 
      href: '#contact', 
      icon: ChatBubbleLeftRightIcon,
      section: 'contact',
      glow: 'from-blue-400 via-indigo-500 to-purple-600',
      type: 'scroll'
    },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        id="main-header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'backdrop-blur-2xl bg-black/80 border-b border-white/10 shadow-2xl shadow-purple-500/20'
            : 'bg-transparent'
        }`}
      >
        {/* Interactive mouse glow */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-violet-500/20 via-purple-600/20 to-indigo-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-300 opacity-0 hover:opacity-100"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>

        {/* Animated mesh background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/10 via-purple-900/5 to-indigo-900/10"></div>
          
          {/* Floating particles */}
          <motion.div 
            className="absolute -top-10 left-1/4 w-20 h-20 bg-gradient-to-r from-violet-500/30 to-purple-600/30 rounded-full blur-2xl"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -top-10 right-1/3 w-16 h-16 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-full blur-2xl"
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between h-20">
            
            {/* Ultra-Premium Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link 
                href="/"
                className="flex items-center space-x-4"
              >
                {/* Multi-layered logo */}
                <div className="relative">
                  {/* Outer glow ring */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                  
                  {/* Main logo container */}
                  <div className="relative w-12 h-12 bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50 group-hover:shadow-purple-400/70 transition-all duration-500 border border-white/20 backdrop-blur-xl overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Letter */}
                    <span className="relative z-10 text-white font-black text-xl group-hover:scale-110 transition-transform duration-300">A</span>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                  
                  {/* Floating sparkle */}
                  <motion.div 
                    className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <SparklesIcon className="w-4 h-4 text-violet-400" />
                  </motion.div>
                </div>
                
                {/* Brand text */}
                <div className="hidden sm:block">
                  <motion.h1 
                    className="text-xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent group-hover:from-violet-300 group-hover:via-purple-300 group-hover:to-indigo-300 transition-all duration-500"
                    whileHover={{ scale: 1.02 }}
                  >
                    Ahmed Asim
                  </motion.h1>
                  <p className="text-sm font-semibold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Full Stack Developer
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Revolutionary Desktop Navigation */}
            <nav className="hidden lg:flex relative">
              {/* Navigation container with glassmorphism */}
              <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-2xl rounded-2xl p-2 border border-white/10 shadow-2xl shadow-purple-500/20">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="relative"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {item.type === 'link' ? (
                      <Link
                        href={item.href}
                        className={`group relative flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all duration-500 overflow-hidden ${
                          activeSection === item.section
                            ? 'text-white shadow-lg'
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {/* Active background with morphing effect */}
                        {activeSection === item.section && (
                          <motion.div
                            layoutId="activeNavBackground"
                            className={`absolute inset-0 bg-gradient-to-r ${item.glow} rounded-xl`}
                            initial={false}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        
                        {/* Hover glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.glow} rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                        
                        {/* Icon and text */}
                        <item.icon className="w-4 h-4 relative z-10" />
                        <span className="relative z-10 text-sm">{item.name}</span>
                        
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                        </div>
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        className={`group relative flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all duration-500 overflow-hidden ${
                          activeSection === item.section
                            ? 'text-white shadow-lg'
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {/* Active background with morphing effect */}
                        {activeSection === item.section && (
                          <motion.div
                            layoutId="activeNavBackground"
                            className={`absolute inset-0 bg-gradient-to-r ${item.glow} rounded-xl`}
                            initial={false}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        
                        {/* Hover glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.glow} rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                        
                        {/* Icon and text */}
                        <item.icon className="w-4 h-4 relative z-10" />
                        <span className="relative z-10 text-sm">{item.name}</span>
                        
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                        </div>
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Premium Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Enhanced Resume Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="hidden md:block"
              >
               <ResumeDownload variant="button" />
              </motion.div>

              {/* Futuristic Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative group"
              >
                {/* Button container */}
                <div className="relative p-3 bg-black/30 backdrop-blur-2xl rounded-2xl border border-white/10 text-white hover:bg-white/10 transition-all duration-500 shadow-xl shadow-purple-500/20">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Animated icon */}
                  <motion.div
                    animate={{ rotate: isMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    {isMenuOpen ? (
                      <XMarkIcon className="w-6 h-6" />
                    ) : (
                      <Bars3Icon className="w-6 h-6" />
                    )}
                  </motion.div>
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Premium Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="lg:hidden backdrop-blur-2xl bg-black/90 border-t border-white/10 shadow-2xl"
            >
              {/* Mobile menu background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-indigo-900/20"></div>
              
              <nav className="container mx-auto px-6 py-8 relative z-10">
                <div className="space-y-2">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      {item.type === 'link' ? (
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`group relative flex items-center gap-4 px-6 py-4 rounded-2xl font-semibold transition-all duration-500 border overflow-hidden ${
                            activeSection === item.section
                              ? `bg-gradient-to-r ${item.glow} text-white border-white/20 shadow-2xl`
                              : 'text-gray-300 hover:text-white border-white/10 hover:bg-white/10 hover:border-white/20'
                          }`}
                        >
                          {/* Icon container */}
                          <div className={`p-2 rounded-xl bg-gradient-to-r ${item.glow} shadow-lg flex-shrink-0`}>
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          
                          {/* Text */}
                          <span className="text-lg flex-1">{item.name}</span>
                          
                          {/* Arrow indicator */}
                          <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                          
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          onClick={(e) => handleSmoothScroll(e, item.href)}
                          className={`group relative flex items-center gap-4 px-6 py-4 rounded-2xl font-semibold transition-all duration-500 border overflow-hidden ${
                            activeSection === item.section
                              ? `bg-gradient-to-r ${item.glow} text-white border-white/20 shadow-2xl`
                              : 'text-gray-300 hover:text-white border-white/10 hover:bg-white/10 hover:border-white/20'
                          }`}
                        >
                          {/* Icon container */}
                          <div className={`p-2 rounded-xl bg-gradient-to-r ${item.glow} shadow-lg flex-shrink-0`}>
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          
                          {/* Text */}
                          <span className="text-lg flex-1">{item.name}</span>
                          
                          {/* Arrow indicator */}
                          <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                          
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                        </a>
                      )}
                    </motion.div>
                  ))}
                  
                  {/* Mobile Resume Button */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: navigation.length * 0.1 }}
                    className="pt-4"
                  >
                   <ResumeDownload variant="button" className="w-full" />
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Dynamic spacer that adjusts for header height */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;