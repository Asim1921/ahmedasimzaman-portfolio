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
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]" />
      
      <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 dark:from-purple-300 dark:via-pink-300 dark:to-cyan-300">
        {children}
      </span>
    </motion.div>
  );
};

export default AnimatedGradientText;

