'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

const experiences = [
  {
    title: 'Full-Stack Web Developer',
    company: 'inoTech Solutions',
    location: 'Rawalpindi, PK',
    period: 'Nov 2025 — Present',
    highlights: [
      'Co-leading frontend development of CyberRange, an enterprise cybersecurity training platform, with React.js and Next.js.',
      'Built 10+ dynamic, accessible UI components with Tailwind CSS and integrated FastAPI endpoints for challenge orchestration and scoring.',
      'Run regular code reviews, enforcing clean-code standards and reducing bug density.',
    ],
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'FastAPI'],
  },
  {
    title: 'Software Engineer',
    company: 'Komatsu Pakistan Soft',
    location: 'Rawalpindi, PK',
    period: 'Jul 2025 — Oct 2025',
    highlights: [
      'Built enterprise web applications with .NET Core, C#, EF Core and Angular for 500+ internal users.',
      'Designed scalable REST APIs and optimized SQL Server queries, cutting average response time by ~30%.',
      'Participated in the full SDLC within an Agile team — analysis, design, sprint planning and deployment.',
    ],
    skills: ['.NET Core', 'C#', 'EF Core', 'Angular', 'SQL Server'],
  },
  {
    title: 'Developer',
    company: 'Meta-Dao',
    location: 'Remote',
    period: 'Jul 2024 — Jan 2025',
    highlights: [
      'Built decentralized applications and contributed to blockchain ecosystem development.',
      'Developed backend systems with .NET, implemented RESTful APIs and designed scalable database architectures.',
    ],
    skills: ['.NET', 'Blazor', 'MVC', 'Swagger'],
  },
  {
    title: 'Research Assistant',
    company: 'Higher Education Commission',
    location: 'Pakistan',
    period: 'Aug 2023 — Jun 2024',
    highlights: [
      'Led educational-technology R&D and machine-learning work on human pose estimation and educational data analysis.',
      'Collaborated with academic teams on research publications and conference presentations.',
    ],
    skills: ['Research', 'Machine Learning', 'Data Analysis'],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative border-t border-line py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="A short professional history."
          description="Four roles across product engineering, enterprise software and research."
        />

        <ol className="mt-16 ml-1.5 space-y-8 border-l border-line">
          {experiences.map((exp, i) => (
            <Reveal as="li" key={exp.company} delay={i * 70} className="relative pl-7 sm:pl-10">
              <span className="absolute -left-[7px] top-6 h-3.5 w-3.5 rounded-full border-2 border-ink bg-accent" />

              <div className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-[var(--line-strong)]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs text-[var(--faint)]">{exp.period}</span>
                  <span className="rounded-full border border-line px-2.5 py-1 text-[11px] text-[var(--muted)]">
                    {exp.location}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-white">{exp.title}</h3>
                <p className="text-sm font-medium text-accent-soft">{exp.company}</p>

                <ul className="mt-4 space-y-2.5">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--faint)]" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-[11px] text-[var(--muted)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
