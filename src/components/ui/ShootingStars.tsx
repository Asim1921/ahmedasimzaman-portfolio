'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ShootingStarsProps {
  className?: string;
}

const ShootingStars: React.FC<ShootingStarsProps> = ({ className }) => {
  const stars = React.useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 50;
      const radius = Math.random() * 300 + 50;
      return {
        id: i,
        top: 50 + Math.cos(angle) * radius / 2,
        left: 50 + Math.sin(angle) * radius / 2,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 5,
        translateX: Math.cos(angle) * 400,
        translateY: Math.sin(angle) * 400,
      };
    });
  }, []);

  return (
    <div className={cn("fixed inset-0 overflow-hidden pointer-events-none z-0", className)}>
      {stars.map((star) => {
        const angle = Math.atan2(star.translateY, star.translateX) * 180 / Math.PI;
        return (
          <div
            key={star.id}
            className="absolute"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              '--translate-x': `${star.translateX}px`,
              '--translate-y': `${star.translateY}px`,
              animation: `shoot ${star.duration}s linear infinite`,
              animationDelay: `${star.delay}s`,
            } as React.CSSProperties}
          >
            <div className="relative w-1 h-1">
              <div className="absolute inset-0 bg-white rounded-full" />
              <div 
                className="absolute top-1/2 left-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent origin-left"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShootingStars;

