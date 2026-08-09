import type { ThemeMode } from "../types/common.types"


// Local storage keys
export const STORAGE_KEYS = {
  theme: 'sc__theme',
  blogFilters: 'sc__blog_filters',
} as const

// Theme modes
export const THEME_MODES = ['light', 'dark', 'glass'] as const satisfies readonly ThemeMode[]