import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ThemeMode } from '../../../types/common.types'
import { STORAGE_KEYS, THEME_MODES } from '../../../lib/constants'

interface ThemeState {
  mode: ThemeMode
}

const isThemeMode = (value: unknown): value is ThemeMode =>
  typeof value === 'string' && (THEME_MODES as readonly string[]).includes(value)

const getInitialTheme = (): ThemeMode => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.theme)
    if (isThemeMode(stored)) return stored
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  } catch {
    /* ignore — SSR / privacy mode */
  }
  return 'light'
}

/**
 * Writes the mode to <html>:
 *   data-theme="light | dark | glass"  → drives every CSS custom property
 *   .dark class                        → keeps Tailwind's `dark:` variant usable
 */
export const applyTheme = (mode: ThemeMode): void => {
  try {
    const root = document.documentElement
    root.setAttribute('data-theme', mode)
    root.classList.toggle('dark', mode !== 'light')
    root.style.colorScheme = mode === 'light' ? 'light' : 'dark'
    localStorage.setItem(STORAGE_KEYS.theme, mode)
  } catch {
    /* ignore */
  }
}

const initialState: ThemeState = {
  mode: getInitialTheme(),
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload
      applyTheme(action.payload)
    },
    /** Cycles light → dark → glass → light */
    cycleTheme(state) {
      const index = THEME_MODES.indexOf(state.mode)
      const next = THEME_MODES[(index + 1) % THEME_MODES.length]
      state.mode = next
      applyTheme(next)
    },
  },
})

export const { setTheme, cycleTheme } = themeSlice.actions
export default themeSlice.reducer
