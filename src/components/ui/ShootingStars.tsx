'use client';

import React, { useMemo, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export interface ShootingStarsProps {
  className?: string;
}

const ShootingStars: React.FC<ShootingStarsProps> = ({ className }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: 30 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 30;
      const radius = Math.random() * 200 + 100;
      const translateX = Math.cos(angle) * 400;
      const translateY = Math.sin(angle) * 400;
      return {
        id: i,
        top: 50 + Math.cos(angle) * radius / 2,
        left: 50 + Math.sin(angle) * radius / 2,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 5,
        translateX,
        translateY,
        angle: Math.atan2(translateY, translateX) * 180 / Math.PI,
      };
    });
  }, [mounted]);

  useEffect(() => {
    if (!mounted || stars.length === 0) return;
    
    const styleId = 'shooting-stars-styles';
    let style = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!style) {
      style = document.createElement('style');
      style.id = styleId;
      document.head.appendChild(style);
    }
    
    style.textContent = stars.map((star) => `
      @keyframes shoot-star-${star.id} {
        0% {
          opacity: 0;
          transform: translate(0, 0) scale(0);
        }
        10% {
          opacity: 1;
          transform: translate(0, 0) scale(1);
        }
        100% {
          opacity: 0;
          transform: translate(${star.translateX}px, ${star.translateY}px) scale(1);
        }
      }
    `).join('\n');
    
    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, [stars, mounted]);

  if (!mounted || stars.length === 0) {
    return null;
  }

  return (
    <div className={cn("fixed inset-0 overflow-hidden pointer-events-none z-0", className)}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animation: `shoot-star-${star.id} ${star.duration}s linear infinite`,
            animationDelay: `${star.delay}s`,
          }}
        >
          <div className="relative w-1 h-1">
            <div className="absolute inset-0 bg-white rounded-full" />
            <div 
              className="absolute top-1/2 left-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent origin-left"
              style={{
                transform: `translate(-50%, -50%) rotate(${star.angle}deg)`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShootingStars;

