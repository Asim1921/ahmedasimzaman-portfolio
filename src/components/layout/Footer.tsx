'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  { name: 'GitHub', href: 'https://github.com/Asim1921' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/asim-zaman-869053175/' },
  { name: 'X', href: 'https://x.com/Asimzaman190' },
  { name: 'Email', href: 'mailto:asimzaman2000@gmail.com' },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="relative border-t border-line bg-ink">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface-2 text-sm font-semibold text-white">
                A
              </span>
              <span className="text-sm font-semibold text-white">Ahmed Asim Zaman</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
              Full-stack engineer building performant, dependable web products — front to back.
            </p>
            <a
              href="mailto:asimzaman2000@gmail.com"
              className="mt-5 inline-block text-sm text-[var(--text)] underline-offset-4 hover:underline"
            >
              asimzaman2000@gmail.com
            </a>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3">
            <h3 className="eyebrow">Navigate</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-sm text-[var(--muted)] transition-colors hover:text-white"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-[var(--muted)] transition-colors hover:text-white">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <h3 className="eyebrow">Connect</h3>
            <ul className="mt-5 space-y-3">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-white"
                  >
                    <span className="h-px w-4 bg-line transition-all group-hover:w-6 group-hover:bg-accent" />
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-[var(--faint)]">© {year} Ahmed Asim Zaman. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 text-xs text-[var(--muted)] transition-colors hover:text-white"
          >
            Back to top
            <span className="grid h-7 w-7 place-items-center rounded-full border border-line transition-colors group-hover:border-[var(--line-strong)]">
              <ArrowUpIcon className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
