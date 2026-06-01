'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  /** seconds for one full loop */
  duration?: number;
  reverse?: boolean;
}

/**
 * Pure-CSS marquee. Content is rendered twice and translated -50% for a
 * seamless loop; pauses on hover. No JS animation frame.
 */
const Marquee: React.FC<MarqueeProps> = ({ children, className, duration = 38, reverse = false }) => {
  return (
    <div className={cn('marquee', className)}>
      <div
        className="marquee-track flex w-max shrink-0 items-center gap-4 pr-4 animate-marquee"
        style={
          {
            '--marquee-duration': `${duration}s`,
            animationDirection: reverse ? 'reverse' : 'normal',
          } as React.CSSProperties
        }
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export default Marquee;
