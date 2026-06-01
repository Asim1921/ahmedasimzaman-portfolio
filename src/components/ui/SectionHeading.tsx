import React from 'react';
import Reveal from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}) => {
  const centered = align === 'center';
  return (
    <div className={cn(centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl', className)}>
      <Reveal className={cn('flex items-center gap-3', centered && 'justify-center')}>
        {index && <span className="font-mono text-xs text-accent-soft">{index}</span>}
        <span className="eyebrow">{eyebrow}</span>
        <span className="h-px w-10 bg-line" />
      </Reveal>

      <Reveal
        as="h2"
        delay={60}
        className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tightest text-fade text-balance"
      >
        {title}
      </Reveal>

      {description && (
        <Reveal as="p" delay={120} className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--muted)]">
          {description}
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;
