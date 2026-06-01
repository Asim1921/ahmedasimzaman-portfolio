/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1180px',
      },
    },
    extend: {
      colors: {
        // Refined dark base — layered near-blacks
        ink: '#09090b',
        surface: '#0e0e11',
        'surface-2': '#15151a',
        line: 'rgba(255,255,255,0.08)',
        // Restrained accent (kept from the original violet → indigo family)
        accent: {
          DEFAULT: '#8b7bff',
          soft: '#a99bff',
          deep: '#6d5dff',
        },
        accent2: {
          DEFAULT: '#38bdf8',
          deep: '#0ea5e9',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        prose: '68ch',
      },
      backgroundImage: {
        'grid-line':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 40s) linear infinite',
        'fade-in': 'fade-in 0.6s ease both',
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
