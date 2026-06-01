'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(100),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: EnvelopeIcon, label: 'Email', value: 'asimzaman2000@gmail.com', href: 'mailto:asimzaman2000@gmail.com' },
  { icon: PhoneIcon, label: 'Phone', value: '+92 340 5735723', href: 'tel:+923405735723' },
  { icon: MapPinIcon, label: 'Location', value: 'Islamabad, Pakistan', href: null },
];

const socials = [
  { name: 'GitHub', href: 'https://github.com/Asim1921' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/asim-zaman-869053175/' },
  { name: 'X', href: 'https://x.com/Asimzaman190' },
];

const inputBase =
  'w-full rounded-xl border bg-surface-2 px-4 py-3 text-sm text-white placeholder:text-[var(--faint)] outline-none transition-colors focus:ring-2 focus:ring-accent/20';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        setStatus('success');
        setStatusMessage(result.message || 'Thanks — your message has been sent.');
        reset();
      } else {
        setStatus('error');
        setStatusMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldError = (msg?: string) =>
    msg ? <p className="mt-1.5 text-xs text-red-400">{msg}</p> : null;

  return (
    <section id="contact" className="relative border-t border-line py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let's work together."
          description="Have a project in mind, a role to fill, or just want to say hello? My inbox is always open."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          {/* Info */}
          <div className="lg:col-span-5">
            <Reveal className="space-y-3">
              {contactInfo.map((info) => {
                const Inner = (
                  <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-[var(--line-strong)]">
                    <span className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-surface-2 text-accent-soft">
                      <info.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="eyebrow">{info.label}</div>
                      <div className="mt-1 text-sm font-medium text-white">{info.value}</div>
                    </div>
                  </div>
                );
                return info.href ? (
                  <a key={info.label} href={info.href} className="block">
                    {Inner}
                  </a>
                ) : (
                  <div key={info.label}>{Inner}</div>
                );
              })}
            </Reveal>

            <Reveal delay={120} className="mt-6 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm text-[var(--muted)] transition-colors hover:border-[var(--line-strong)] hover:text-white"
                >
                  {s.name}
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </a>
              ))}
            </Reveal>

            <Reveal delay={180} className="mt-6 flex items-center gap-3 rounded-2xl border border-line bg-surface p-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <p className="text-sm text-[var(--muted)]">
                <span className="font-medium text-white">Available for work</span> · usually replies within 24h
              </p>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={100} className="lg:col-span-7">
            <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-line bg-surface p-7 sm:p-8">
              {status !== 'idle' && (
                <div
                  className={cn(
                    'mb-6 flex items-center gap-3 rounded-xl border px-4 py-3 text-sm',
                    status === 'success'
                      ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                      : 'border-red-500/30 bg-red-500/10 text-red-300'
                  )}
                >
                  {status === 'success' ? (
                    <CheckCircleIcon className="h-5 w-5 shrink-0" />
                  ) : (
                    <ExclamationCircleIcon className="h-5 w-5 shrink-0" />
                  )}
                  {statusMessage}
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-[var(--muted)]">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    {...register('name')}
                    className={cn(inputBase, errors.name ? 'border-red-500/50' : 'border-line focus:border-accent/60')}
                  />
                  {fieldError(errors.name?.message)}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-[var(--muted)]">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...register('email')}
                    className={cn(inputBase, errors.email ? 'border-red-500/50' : 'border-line focus:border-accent/60')}
                  />
                  {fieldError(errors.email?.message)}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="mb-2 block text-sm text-[var(--muted)]">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  {...register('subject')}
                  className={cn(inputBase, errors.subject ? 'border-red-500/50' : 'border-line focus:border-accent/60')}
                />
                {fieldError(errors.subject?.message)}
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm text-[var(--muted)]">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me about your project or just say hello."
                  {...register('message')}
                  className={cn(
                    inputBase,
                    'resize-y',
                    errors.message ? 'border-red-500/50' : 'border-line focus:border-accent/60'
                  )}
                />
                {fieldError(errors.message?.message)}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white text-sm font-medium text-ink transition-all duration-300 hover:bg-white/90 disabled:opacity-60 sm:w-auto sm:px-8"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="mt-4 text-xs text-[var(--faint)]">
                Your information is kept private and never shared.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
