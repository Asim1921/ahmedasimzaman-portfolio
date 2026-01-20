'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface MagicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-950",
        className
      )}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8b5cf6_0%,#a855f7_50%,#3b82f6_100%,#8b5cf6_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all hover:bg-slate-900">
        {children}
      </span>
    </button>
  );
};

export default MagicButton;

