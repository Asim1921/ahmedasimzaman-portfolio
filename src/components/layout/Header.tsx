'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

type NavItem = { name: string; href: string; section: string; type: 'scroll' | 'link' };

const navigation: NavItem[] = [
  { name: 'About', href: '#about', section: 'about', type: 'scroll' },
  { name: 'Experience', href: '#experience', section: 'experience', type: 'scroll' },
  { name: 'Work', href: '#projects', section: 'projects', type: 'scroll' },
  { name: 'Skills', href: '#skills', section: 'skills', type: 'scroll' },
  { name: 'Blog', href: '/blog', section: 'blog', type: 'link' },
  { name: 'Contact', href: '#contact', section: 'contact', type: 'scroll' },
];

const spySections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);

        const pos = window.scrollY + 120;
        let current = spySections[0];
        for (const id of spySections) {
          const el = document.getElementById(id);
          if (el && pos >= el.offsetTop) current = id;
        }
        setActive(current);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || menuOpen
          ? 'border-b border-line bg-ink/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface-2 text-sm font-semibold text-white transition-colors group-hover:border-[var(--line-strong)]">
            A
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="text-sm font-semibold text-white">Ahmed Asim Zaman</span>
            <span className="mt-1 text-[11px] tracking-wide text-[var(--faint)]">Full-Stack Engineer</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) =>
            item.type === 'link' ? (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm text-[var(--muted)] transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={cn(
                  'relative rounded-full px-3.5 py-2 text-sm transition-colors',
                  active === item.section ? 'text-white' : 'text-[var(--muted)] hover:text-white'
                )}
              >
                {item.name}
                {active === item.section && (
                  <span className="absolute inset-x-3.5 -bottom-px h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                )}
              </a>
            )
          )}
        </nav>

        {/* Action */}
        <div className="flex items-center gap-2">
          <a
            href="/resume/AhmedAsimZamanCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex h-9 items-center gap-1.5 rounded-full border border-line px-4 text-[13px] font-medium text-[var(--text)] transition-colors hover:border-[var(--line-strong)] hover:bg-white/[0.04]"
          >
            Résumé
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-white lg:hidden"
          >
            {menuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="lg:hidden border-t border-line bg-ink/95 backdrop-blur-xl">
          <div className="container flex flex-col py-4">
            {navigation.map((item) =>
              item.type === 'link' ? (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-line/60 py-3 text-[15px] text-[var(--text)] last:border-0"
                >
                  {item.name}
                  <ArrowUpRightIcon className="h-4 w-4 text-[var(--faint)]" />
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={cn(
                    'flex items-center justify-between border-b border-line/60 py-3 text-[15px] last:border-0',
                    active === item.section ? 'text-white' : 'text-[var(--muted)]'
                  )}
                >
                  {item.name}
                  {active === item.section && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                </a>
              )
            )}
            <a
              href="/resume/AhmedAsimZamanCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-white text-sm font-medium text-ink"
            >
              Download Résumé
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
