import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import type { ThemeMode } from '@/types/common.types'
import { setTheme, cycleTheme } from '../store/themeSlice'


export function useTheme() {
  const dispatch = useAppDispatch()
  const mode = useAppSelector((state) => state.theme.mode)
  // const mode = 'light' as ThemeMode

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
