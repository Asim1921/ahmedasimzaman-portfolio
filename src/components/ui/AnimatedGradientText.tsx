'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({ children, className }) => {
  return (
    <motion.div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-black/40 backdrop-blur-xl px-4 py-1.5 text-sm font-medium border border-white/10 shadow-lg transition-shadow duration-500 ease-out hover:shadow-xl",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 block h-full w-full rounded-2xl bg-gradient-to-r from-[#ffaa40]/20 via-[#9c40ff]/20 to-[#ffaa40]/20 p-[1px]" />
      
      <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
        {children}
      </span>
    </motion.div>
  );
};

export default AnimatedGradientText;

