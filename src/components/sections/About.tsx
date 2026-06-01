'use client';

import React from 'react';
import Image from 'next/image';
import {
  CodeBracketIcon,
  ServerStackIcon,
  SwatchIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import Reveal from '@/components/ui/Reveal';
import CountUp from '@/components/ui/CountUp';
import SectionHeading from '@/components/ui/SectionHeading';

const facts = [
  { label: 'Based in', value: 'Islamabad, PK' },
  { label: 'Experience', value: '2+ years' },
  { label: 'Focus', value: 'Web platforms' },
  { label: 'Open to', value: 'Full-time & freelance' },
];

const stats = [
  { value: 2, suffix: '+', label: 'Years of experience' },
  { value: 15, suffix: '+', label: 'Projects shipped' },
  { value: 20, suffix: '+', label: 'Technologies' },
  { value: 4, suffix: '', label: 'Professional roles' },
];

const services = [
  {
    icon: SwatchIcon,
    title: 'Frontend engineering',
    body: 'Accessible, responsive interfaces with React, Next.js and Tailwind CSS.',
  },
  {
    icon: ServerStackIcon,
    title: 'Backend & APIs',
    body: 'Reliable REST services with Node, FastAPI and .NET Core, backed by SQL/NoSQL.',
  },
  {
    icon: CodeBracketIcon,
    title: 'End-to-end delivery',
    body: 'From architecture and code reviews to deployment in Agile teams.',
  },
];

const achievements = ["Dean's List", 'Programming Excellence Award', 'AI-powered final-year project'];

const About: React.FC = () => {
  return (
    <section id="about" className="relative border-t border-line py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Engineer, problem-solver, builder."
          description="I care about the details that make software feel fast, clear and dependable — and about shipping work that holds up in production."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* Bio + facts */}
          <div className="lg:col-span-7">
            <Reveal className="space-y-5 text-base sm:text-lg leading-relaxed text-[var(--muted)]">
              <p>
                I&apos;m a full-stack developer with a strong foundation in modern web technologies.
                My work spans the entire stack — crafting intuitive interfaces with React and Next.js,
                and building robust services with Node, FastAPI and .NET Core.
              </p>
              <p>
                I&apos;m currently co-leading frontend development of{' '}
                <span className="text-[var(--text)]">CyberRange</span>, an enterprise cybersecurity
                training platform, where I focus on responsive UI, accessibility and clean,
                review-driven code.
              </p>
            </Reveal>

            <Reveal as="dl" delay={120} className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
              {facts.map((f) => (
                <div key={f.label} className="bg-surface p-5">
                  <dt className="eyebrow">{f.label}</dt>
                  <dd className="mt-2 text-sm font-medium text-white">{f.value}</dd>
                </div>
              ))}
            </Reveal>

            {/* Services */}
            <div className="mt-10 space-y-3">
              {services.map((s, i) => (
                <Reveal
                  key={s.title}
                  delay={i * 80}
                  className="group flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-[var(--line-strong)]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-surface-2 text-accent-soft">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Photo + education */}
          <div className="lg:col-span-5">
            <Reveal className="overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/about-photo.jpg"
                  alt="Ahmed Asim Zaman"
                  fill
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-6 rounded-2xl border border-line bg-surface p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface-2 text-accent-soft">
                  <AcademicCapIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-white">B.S. Computer Science</h3>
                  <p className="text-sm text-[var(--muted)]">UET Taxila · 2020–2024</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-xl border border-line bg-surface-2 px-4 py-3">
                <span className="text-sm text-[var(--muted)]">Final GPA</span>
                <span className="font-mono text-sm font-medium text-white">3.57 / 4.0</span>
              </div>
              <ul className="mt-4 space-y-2">
                {achievements.map((a) => (
                  <li key={a} className="flex items-center gap-2.5 text-sm text-[var(--muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="bg-surface p-6 text-center sm:p-8">
              <div className="text-4xl font-semibold tracking-tight text-fade sm:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs sm:text-sm text-[var(--muted)]">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
