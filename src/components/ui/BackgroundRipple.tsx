'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface BackgroundRippleProps {
  className?: string;
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numberOfCircles?: number;
}

const BackgroundRipple: React.FC<BackgroundRippleProps> = ({
  className,
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numberOfCircles = 8,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const circles: Array<{
      x: number;
      y: number;
      translateX: number;
      translateY: number;
      size: number;
      opacity: number;
    }> = [];

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      for (let i = 0; i < numberOfCircles; i++) {
        circles.push({
          x,
          y,
          translateX: 0,
          translateY: 0,
          size: mainCircleSize,
          opacity: mainCircleOpacity,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number | null = null;
    
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = circles.length - 1; i >= 0; i--) {
        const circle = circles[i];
        circle.translateX += (Math.random() - 0.5) * 1;
        circle.translateY += (Math.random() - 0.5) * 1;
        circle.size += 0.5;
        circle.opacity -= 0.02;

        if (circle.opacity <= 0) {
          circles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = circle.opacity;
        ctx.beginPath();
        ctx.arc(
          circle.x + circle.translateX,
          circle.y + circle.translateY,
          circle.size,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.5)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mainCircleSize, mainCircleOpacity, numberOfCircles, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed inset-0 pointer-events-none", className)}
      style={{ background: 'transparent' }}
    />
  );
};

export default BackgroundRipple;

