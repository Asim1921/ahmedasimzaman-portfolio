'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ArrowUpIcon,
  HeartIcon,
  CodeBracketIcon,
  SparklesIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Asim1921',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      gradient: 'from-gray-700 to-gray-900',
      glow: 'shadow-gray-800/50'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/asim-zaman-869053175/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      gradient: 'from-blue-500 to-blue-700',
      glow: 'shadow-blue-600/50'
    },
    {
      name: 'Twitter',
      href: 'https://x.com/Asimzaman190',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      gradient: 'from-blue-400 to-cyan-500',
      glow: 'shadow-blue-500/50'
    },
    {
      name: 'Email',
      href: 'mailto:asimzaman2000@gmail.com',
      icon: <EnvelopeIcon className="w-6 h-6" />,
      gradient: 'from-violet-500 to-purple-600',
      glow: 'shadow-violet-500/50'
    }
  ];

  const techStack = [
    'Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'
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
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-indigo-900/20"></div>
        
        {/* Footer Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      ></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 pt-20 pb-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50">
                    <span className="text-white font-bold text-2xl">A</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur opacity-50"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Ahmed Asim Zaman
                  </h3>
                  <p className="text-violet-400 font-medium">Full Stack Developer</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-8 leading-relaxed">
                Passionate about creating innovative digital solutions that make a difference. 
                Let's build something amazing together and shape the future of web development.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400 group">
                  <div className="p-2 bg-violet-500/20 rounded-xl group-hover:bg-violet-500/30 transition-colors">
                    <MapPinIcon className="w-4 h-4 text-violet-400" />
                  </div>
                  <span className="group-hover:text-white transition-colors">Islamabad, Pakistan</span>
                </div>
                <a href="mailto:asimzaman2000@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <div className="p-2 bg-cyan-500/20 rounded-xl group-hover:bg-cyan-500/30 transition-colors">
                    <EnvelopeIcon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span>asimzaman2000@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400 group">
                  <div className="p-2 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-colors">
                    <PhoneIcon className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="group-hover:text-white transition-colors">+92 340 5735723</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
                <RocketLaunchIcon className="w-5 h-5 text-violet-400" />
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-violet-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
                <CodeBracketIcon className="w-5 h-5 text-cyan-400" />
                Tech Stack
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="group p-3 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl border border-white/10 hover:border-violet-500/30 transition-all duration-300 backdrop-blur-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Available for Work */}
              <div className="mt-8 p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl border border-green-500/20 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <span className="text-green-400 font-bold">Available for Work</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Open to new opportunities and exciting projects
                </p>
              </div>
            </motion.div>

            {/* Social Links & Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
                <SparklesIcon className="w-5 h-5 text-purple-400" />
                Connect With Me
              </h4>
              
              {/* Social Icons */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-r ${social.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    <div className={`relative h-14 bg-gradient-to-r ${social.gradient} rounded-2xl flex items-center justify-center text-white transition-all duration-300 ${social.glow} group-hover:shadow-2xl border border-white/10`}>
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-r from-violet-900/30 to-purple-900/30 rounded-2xl border border-violet-500/20 backdrop-blur-xl">
                  <div className="text-2xl font-bold text-violet-400">15+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl border border-cyan-500/20 backdrop-blur-xl">
                  <div className="text-2xl font-bold text-cyan-400">3+</div>
                  <div className="text-sm text-gray-400">Years Exp</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              {/* Copyright */}
              <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
                <span>© {currentYear} Ahmed Asim Zaman. All rights reserved.</span>
                <div className="flex items-center gap-2">
                  <span>Made with</span>
                  <HeartIcon className="w-4 h-4 text-red-500 animate-pulse" />
                  <span>and</span>
                  <CodeBracketIcon className="w-4 h-4 text-cyan-400" />
                  <span>in Pakistan</span>
                </div>
              </div>

              {/* Scroll to Top */}
              <motion.button
                onClick={scrollToTop}
                className="group relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-bold rounded-2xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-400/70 transition-all duration-500 border border-white/10 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <ArrowUpIcon className="w-5 h-5 relative z-10 group-hover:-translate-y-1 transition-transform duration-300" />
                <span className="relative z-10">Back to Top</span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Floating Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-violet-500/10 to-purple-600/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </footer>
  );
};

export default Footer;