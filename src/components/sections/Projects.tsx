'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: 'Raabta',
    category: 'Multi-Tenant WhatsApp CRM',
    description:
      'A shared WhatsApp inbox & CRM for Pakistani SMEs. Connect a business number by scanning a QR and turn everyday chats into an organised, multi-agent sales & support workflow — a real-time 3-pane inbox with assignment, statuses, notes, reminders and rich media, all on a truly multi-tenant core.',
    technologies: ['.NET 10', 'Next.js 16', 'PostgreSQL', 'SignalR', 'Node.js', 'Baileys', 'EF Core', 'Tailwind'],
    imageUrl: '/images/projects/Raabta.png',
    featured: true,
  },
  {
    title: 'EventEase',
    category: 'Event Management',
    description:
      'A comprehensive event-management platform that simplifies planning, registration and coordination, with automated notifications and integrated payments built on a microservices architecture.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Socket.io'],
    imageUrl: '/images/projects/EaseUsPlatform.png',
  },
  {
    title: 'Clickgoffer',
    category: 'Local Commerce',
    description:
      'A full-stack platform for local commerce that replaces full-prepayment vouchers with a split-payment reservation model — reserve with a deposit, pay the balance later.',
    technologies: ['React', 'TypeScript', 'MongoDB', 'Node.js'],
    imageUrl: '/images/projects/Clickgoffer.jpeg',
  },
  {
    title: 'Vibely',
    category: 'Backend API',
    description:
      'A full-featured social-media backend with JWT auth, posts, comments, likes, file uploads and email services, wrapped in security and validation middleware.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
    imageUrl: '/images/projects/social-media.png',
  },
  {
    title: 'CRM System',
    category: 'Enterprise',
    description:
      'An enterprise CRM with lead management, sales-pipeline tracking, customer analytics, automated workflows and real-time reporting dashboards.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Chart.js'],
    imageUrl: '/images/projects/Communication.png',
  },
  {
    title: 'Portfolio',
    category: 'Web App',
    description:
      'This very site — built with Next.js 14 and Tailwind, focused on a refined, performant, accessible reading experience.',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/images/projects/portfolio.png',
  },
];

function TechTags({ items, max = 5 }: { items: string[]; max?: number }) {
  const shown = items.slice(0, max);
  const rest = items.length - shown.length;
  return (
    <div className="flex flex-wrap gap-1.5">
      {shown.map((t) => (
        <span key={t} className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-[11px] text-[var(--muted)]">
          {t}
        </span>
      ))}
      {rest > 0 && (
        <span className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-[11px] text-[var(--faint)]">
          +{rest}
        </span>
      )}
    </div>
  );
}

const Projects: React.FC = () => {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <section id="projects" className="relative border-t border-line py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title="Things I've built."
          description="A few projects that show how I approach product engineering, from interface to API."
        />

        {/* Featured */}
        <Reveal className="card gradient-frame group relative mt-16 grid overflow-hidden rounded-3xl border border-line bg-surface lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[380px]">
            <Image
              src={featured.imageUrl}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/10 to-transparent lg:bg-gradient-to-r" />
          </div>

          <div className="flex flex-col justify-center gap-5 p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent-soft">
                Featured
              </span>
              <span className="eyebrow">{featured.category}</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{featured.title}</h3>
            <p className="max-w-prose text-[var(--muted)] leading-relaxed">{featured.description}</p>
            <TechTags items={featured.technologies} max={6} />
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal
              as="article"
              key={p.title}
              delay={i * 70}
              className="card group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.imageUrl}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/85 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-line bg-ink/60 px-2.5 py-1 text-[11px] text-[var(--muted)] backdrop-blur">
                  {p.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-[var(--faint)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </div>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{p.description}</p>
                <div className="mt-auto pt-1">
                  <TechTags items={p.technologies} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
