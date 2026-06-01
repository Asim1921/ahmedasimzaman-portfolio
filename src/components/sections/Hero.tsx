'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDownIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Reveal from '@/components/ui/Reveal';
import Spotlight from '@/components/ui/Spotlight';
import Button from '@/components/ui/Button';

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/Asim1921',
    path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/asim-zaman-869053175/',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    name: 'X',
    href: 'https://x.com/Asimzaman190',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
];

const techRow = ['Next.js', 'React', 'TypeScript', 'Node.js', '.NET', 'MongoDB'];

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      {/* Backdrop */}
      <div aria-hidden className="absolute inset-0 aurora" />
      <div aria-hidden className="absolute inset-0 bg-grid" />
      <Spotlight />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Content */}
          <div className="lg:col-span-7">
            <Reveal className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/70 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-[var(--muted)]">Available for new projects</span>
            </Reveal>

            <Reveal as="h1" delay={80} className="mt-6 text-balance text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[0.98] tracking-tightest text-fade">
              Ahmed Asim Zaman
            </Reveal>

            <Reveal as="p" delay={140} className="mt-4 text-xl sm:text-2xl font-medium text-accent-gradient w-fit">
              Full-Stack Engineer
            </Reveal>

            <Reveal as="p" delay={200} className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[var(--muted)]">
              I design and build performant web applications end to end — from React &amp; Next.js
              interfaces to Node and .NET services. Currently shaping{' '}
              <span className="text-[var(--text)]">CyberRange</span> at inoTech Solutions.
            </Reveal>

            <Reveal delay={260} className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="#projects" variant="primary" size="lg">
                View work
                <ArrowDownIcon className="h-4 w-4" />
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Get in touch
              </Button>
            </Reveal>

            <Reveal delay={320} className="mt-9 flex items-center gap-5">
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line text-[var(--muted)] transition-colors hover:border-[var(--line-strong)] hover:text-white"
                  >
                    <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
              <div className="h-6 w-px bg-line" />
              <p className="text-sm text-[var(--faint)]">Islamabad, Pakistan</p>
            </Reveal>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5">
            <Reveal delay={160} className="relative mx-auto w-full max-w-sm">
              {/* soft accent ring (static, no neon) */}
              <div
                aria-hidden
                className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-accent/30 via-transparent to-transparent"
              />
              <div className="relative overflow-hidden rounded-[28px] border border-line bg-surface">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/1768992951974.jfif"
                    alt="Ahmed Asim Zaman"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                </div>

                {/* caption bar */}
                <div className="flex items-center justify-between gap-3 border-t border-line px-5 py-4">
                  <div>
                    <p className="text-sm font-medium text-white">Building digital products</p>
                    <p className="text-xs text-[var(--faint)]">since 2023</p>
                  </div>
                  <a
                    href="#contact"
                    className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition-transform hover:-translate-y-0.5"
                    aria-label="Get in touch"
                  >
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* tech row */}
        <Reveal delay={380} className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
          <span className="eyebrow">Core stack</span>
          {techRow.map((t) => (
            <span key={t} className="font-mono text-sm text-[var(--muted)]">
              {t}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
