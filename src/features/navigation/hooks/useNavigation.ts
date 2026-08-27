import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { closeMobileMenu, setActiveSection, toggleMobileMenu } from '../store/navigationSlice'


export function useNavigation() {
  const dispatch = useAppDispatch()
  const { isMobileMenuOpen, activeSection } = useAppSelector((s) => s.navigation)

  const close = useCallback(() => dispatch(closeMobileMenu()), [dispatch])
  const toggle = useCallback(() => dispatch(toggleMobileMenu()), [dispatch])
  const setSection = useCallback((s: string) => dispatch(setActiveSection(s)), [dispatch])

  return { isMobileMenuOpen, activeSection, close, toggle, setSection }
}
