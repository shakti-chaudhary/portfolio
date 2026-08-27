import type { Config } from 'tailwindcss'

/**
 * Colours are driven entirely by the CSS custom properties declared in
 * src/styles/globals.css, so every utility (`bg-surface`, `text-muted`, …)
 * resolves correctly in light, dark and glass mode with zero variant classes.
 */
const withOpacity = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`

const config: Config = {
  // `dark` class is toggled alongside data-theme for dark + glass modes
  darkMode: 'class',

  content: ['./index.html', './src/**/*.{ts,tsx}'],

  theme: {
    extend: {
      colors: {
        bg: withOpacity('--c-bg'),
        'bg-alt': withOpacity('--c-bg-alt'),
        surface: withOpacity('--c-surface'),
        'surface-alt': withOpacity('--c-surface-alt'),
        ink: withOpacity('--c-text'),
        muted: withOpacity('--c-text-muted'),
        accent: withOpacity('--c-accent'),
        'accent-ink': withOpacity('--c-accent-ink'),
        line: withOpacity('--c-border'),
      },

      fontFamily: {
        display: ['Instrument Serif', 'Georgia', 'serif'],
        headline: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.35rem' }],
        base: ['1rem', { lineHeight: '1.6rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.85rem' }],
        '2xl': ['1.5rem', { lineHeight: '1.9rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.2rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.4rem' }],
        '5xl': ['3rem', { lineHeight: '1.05' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '0.98' }],
        '8xl': ['6rem', { lineHeight: '0.95' }],
        '9xl': ['8rem', { lineHeight: '0.92' }],
      },

      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
      },

      // Soft, contemporary radii — the reference language is fully rounded
      borderRadius: {
        none: '0px',
        sm: '0.5rem',
        DEFAULT: '0.75rem',
        md: '0.875rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '2.75rem',
        '4xl': '3.5rem',
        full: '9999px',
      },

      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.035em',
        tight: '-0.02em',
        normal: '0em',
        wide: '0.05em',
        wider: '0.12em',
        widest: '0.2em',
      },

      zIndex: {
        behind: '-1',
        base: '0',
        raised: '10',
        dropdown: '20',
        sticky: '30',
        overlay: '40',
        modal: '50',
        nav: '90',
        top: '100',
      },

      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-dot': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.5)', opacity: '0.55' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.85)', opacity: '0.7' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },

      animation: {
        'fade-in': 'fade-in 0.5s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in-up': 'fade-in-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'scale-in': 'scale-in 0.4s cubic-bezier(0.22,1,0.36,1) forwards',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        shimmer: 'shimmer 1.8s linear infinite',
        'spin-slow': 'spin 18s linear infinite',
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },

      maxWidth: {
        container: '82rem',
        'content-sm': '40rem',
        'content-md': '56rem',
        'content-lg': '64rem',
      },

      backdropBlur: {
        xs: '2px',
        sm: '6px',
        DEFAULT: '12px',
        md: '18px',
        lg: '24px',
        xl: '36px',
      },

      boxShadow: {
        soft: '0 12px 34px -18px rgb(0 0 0 / 0.35)',
        lift: '0 28px 60px -28px rgb(0 0 0 / 0.5)',
      },
    },
  },

  plugins: [],
}

export default config
