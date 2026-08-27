import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { NAV_ITEMS, CONTACT_EMAIL } from '@/lib/constants'
import { Button, Icon } from '@/components/ui'
import { useScrollPosition } from '@/hooks'
import { useNavigation } from '../hooks/useNavigation'
import { Logo } from './Logo'
import { ThemeToggle } from '@/features/theme/components/ThemeToggle'
import { MobileMenu } from './MobileMenu'

export const Navbar: React.FC = () => {
  const { isScrolled } = useScrollPosition()
  const { isMobileMenuOpen, toggle, close } = useNavigation()
  const location = useLocation()

  useEffect(() => {
    close()
  }, [location.pathname, close])

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-nav px-4 pt-4 sm:px-6 sm:pt-5">
        <nav className={cn('mx-auto flex max-w-container items-center justify-between gap-6 rounded-full', 'py-2.5 pl-5 pr-2.5 transition-all duration-300 ease-smooth',
            isScrolled ? 'panel-nav' : 'border border-transparent bg-transparent' )} >
          <Logo size="sm" />

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) =>
              item.href.startsWith('#') ? (
                <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-label-md text-muted transition-colors hover:bg-line/[0.06] hover:text-ink" >
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} to={item.href} className="rounded-full px-4 py-2 text-label-md text-muted transition-colors hover:bg-line/[0.06] hover:text-ink" >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle className="hidden sm:flex" />
            <ThemeToggle variant="compact" className="sm:hidden" />
                {/* as="a" href={`mailto:${CONTACT_EMAIL}`} */}
            <Button  variant="primary" size="sm" className="hidden md:inline-flex" >
              Let's talk
            </Button>

            <button type="button" onClick={toggle} aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMobileMenuOpen}
              className="panel-soft grid h-11 w-11 place-items-center rounded-full text-ink transition-transform hover:scale-105 active:scale-95 lg:hidden" >
              <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size={20} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={close} />
    </>
  )
}
