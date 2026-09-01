/**
 * lib/constants.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * App-wide constants. Feature-specific constants live in their feature dir.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { ThemeMode } from '@/types/common.types'

// ─── Site identity ────────────────────────────────────────────────────────
export const SITE_NAME = 'Shakti Chaudhary'
export const SITE_OWNER = 'Shakti Chaudhary'
export const SITE_ROLE = 'Full-Stack MERN Engineer'
export const SITE_TAGLINE = 'Full-Stack MERN Developer'
export const SITE_INTRO = 'I design and build high-performance web applications — precise code, considered interfaces, and systems that stay fast as they scale.'
export const CONTACT_EMAIL = 'shakti@terminal-architect.io'
export const CONTACT_LOCATION = 'Remote · India · UTC+5:30'
export const SITE_URL = 'https://shakti-chaudahry.io'
export const AVAILABILITY = 'Available for work'

// ─── Social links ─────────────────────────────────────────────────────────
export const SOCIAL_LINKS = {
  github: 'https://github.com/shaktichaudhary',
  linkedin: 'https://linkedin.com/in/shaktichaudhary',
  twitter: 'https://twitter.com/shaktichaudhary',
} as const

// ─── Navigation ───────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Journal', href: '/blog' },
] as const

export const FOOTER_SOCIAL = [
  { platform: 'GitHub' as const, href: SOCIAL_LINKS.github },
  { platform: 'LinkedIn' as const, href: SOCIAL_LINKS.linkedin },
  { platform: 'Twitter' as const, href: SOCIAL_LINKS.twitter },
  { platform: 'Email' as const, href: `mailto:${CONTACT_EMAIL}` },
] as const

// ─── Hero proof points (floating chips beside the hero visual) ───────────
export const HERO_STATS = [
  { id: 'exp', value: '3+', label: 'Years shipping' },
  { id: 'perf', value: '40%', label: 'Faster load times' },
  { id: 'services', value: '15+', label: 'Services built' },
] as const

// ─── Imagery ──────────────────────────────────────────────────────────────
export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80'
export const HERO_IMAGE_ALT = 'Workstation where the work gets made'

// ─── Theme ────────────────────────────────────────────────────────────────
export const THEME_MODES = ['light', 'dark', 'glass'] as const satisfies readonly ThemeMode[]

export const THEME_META: Record<ThemeMode, { label: string; icon: string; hint: string }> = {
  light: { label: 'Light', icon: 'light_mode', hint: 'Ivory paper' },
  dark: { label: 'Dark', icon: 'dark_mode', hint: 'Espresso' },
  glass: { label: 'Glass', icon: 'blur_on', hint: 'Frosted aurora' },
}

// ─── Layout ───────────────────────────────────────────────────────────────
export const NAV_HEIGHT = 88 // px — keep in sync with --nav-height
export const MAX_CONTENT_WIDTH = '82rem'

// ─── Pagination ───────────────────────────────────────────────────────────
export const BLOG_POSTS_PER_PAGE = 6
export const PROJECTS_PER_PAGE = 6

// ─── Animation durations (ms) ────────────────────────────────────────────
export const ANIMATION = {
  fast: 120,
  base: 260,
  slow: 520,
  slower: 900,
} as const

// ─── Breakpoints (must match tailwind.config screens) ────────────────────
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// ─── Local storage keys ───────────────────────────────────────────────────
export const STORAGE_KEYS = {
  theme: 'sc__theme',
  blogFilters: 'sc__blog_filters',
} as const

// ─── Query keys (for future React Query integration) ─────────────────────
export const QUERY_KEYS = {
  posts: ['posts'] as const,
  post: (slug: string) => ['posts', slug] as const,
  projects: ['projects'] as const,
} as const
