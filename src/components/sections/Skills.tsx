'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';
import Marquee from '@/components/ui/Marquee';
import SectionHeading from '@/components/ui/SectionHeading';

type Skill = { name: string; level: number; years: string };

const groups: { title: string; skills: Skill[] }[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 95, years: '3+ yrs' },
      { name: 'Next.js', level: 90, years: '2+ yrs' },
      { name: 'TypeScript', level: 88, years: '2+ yrs' },
      { name: 'Tailwind CSS', level: 92, years: '2+ yrs' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 87, years: '3+ yrs' },
      { name: 'Express.js', level: 85, years: '3+ yrs' },
      { name: '.NET Core', level: 80, years: '2+ yrs' },
      { name: 'FastAPI', level: 75, years: '1+ yrs' },
    ],
  },
  {
    title: 'Data',
    skills: [
      { name: 'MongoDB', level: 85, years: '3+ yrs' },
      { name: 'PostgreSQL', level: 78, years: '2+ yrs' },
      { name: 'SQL Server', level: 76, years: '1+ yrs' },
      { name: 'Redis', level: 70, years: '1+ yrs' },
    ],
  },
  {
    title: 'Tooling',
    skills: [
      { name: 'Git & GitHub', level: 90, years: '3+ yrs' },
      { name: 'Docker', level: 75, years: '1+ yrs' },
      { name: 'Vercel', level: 85, years: '2+ yrs' },
      { name: 'Figma', level: 80, years: '2+ yrs' },
    ],
  },
];

const marqueeItems = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express',
  '.NET Core', 'C#', 'FastAPI', 'Python', 'MongoDB', 'PostgreSQL',
  'SQL Server', 'Redis', 'Tailwind CSS', 'Docker', 'Git', 'Figma',
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative border-t border-line py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="Skills"
          title="Tools I work with."
          description="A practical toolkit built across product, enterprise and research work."
        />

        {/* Marquee strip */}
        <Reveal className="mt-14">
          <Marquee duration={42} className="py-2">
            {marqueeItems.map((item) => (
              <span
                key={item}
                className="mx-1.5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-[var(--muted)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                {item}
              </span>
            ))}
          </Marquee>
        </Reveal>

        {/* Grouped proficiency grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {groups.map((group, gi) => (
            <Reveal
              key={group.title}
              delay={gi * 80}
              className="card rounded-3xl border border-line bg-surface p-7"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <span className="font-mono text-xs text-[var(--faint)]">
                  {group.skills.length.toString().padStart(2, '0')}
                </span>
              </div>

              <ul className="space-y-5">
                {group.skills.map((s) => (
                  <li key={s.name}>
                    <div className="mb-2 flex items-baseline justify-between">
                      <span className="text-sm font-medium text-[var(--text)]">{s.name}</span>
                      <span className="font-mono text-xs text-[var(--faint)]">{s.years}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
                      <div
                        className="skill-bar h-full rounded-full bg-gradient-to-r from-accent-deep to-accent-soft"
                        style={{ '--skill': `${s.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
