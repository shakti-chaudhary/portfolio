import { useCallback } from 'react'
// import { useAppDispatch, useAppSelector } from '@/app/hooks'
// import type { ThemeMode } from '@/types/common.types'
import { setTheme, cycleTheme } from '../store/themeSlice'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import type { ThemeMode } from '../../../types/common.types'

/**
 * useTheme
 * Single entry point for reading and changing the active visual mode.
 */
export function useTheme() {
  const dispatch = useAppDispatch()
  // const mode = useAppSelector((state) => state.theme.mode)
  const mode = 'light' as ThemeMode

  const select = useCallback((next: ThemeMode) => dispatch(setTheme(next)), [dispatch])
  const cycle = useCallback(() => dispatch(cycleTheme()), [dispatch])

  return {
    mode,
    select,
    cycle,
    isLight: mode === 'light',
    isDark: mode === 'dark',
    isGlass: mode === 'glass',
  }
}
