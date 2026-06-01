'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** delay in ms before the reveal transition starts */
  delay?: number;
  /** element to render as (div, li, span, h2, ...) */
  as?: React.ElementType;
}

/**
 * Lightweight scroll-reveal. Uses a single IntersectionObserver and CSS
 * transitions (see `.reveal` in globals.css) — no animation library, and it
 * fully respects `prefers-reduced-motion`.
 */
const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0, as }) => {
  const Tag = (as ?? 'div') as React.ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn('reveal', visible && 'is-visible', className)}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
