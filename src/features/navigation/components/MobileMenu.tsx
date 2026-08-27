import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { NAV_ITEMS, FOOTER_SOCIAL, CONTACT_EMAIL, AVAILABILITY } from '@/lib/constants'
import { Button, Icon } from '@/components/ui'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => (
  <div role="dialog" aria-modal="true"  aria-label="Navigation"  aria-hidden={!isOpen}
   className={cn('fixed inset-0 z-overlay flex flex-col justify-between bg-bg/85 px-6 pb-10 pt-28 backdrop-blur-xl', 'transition-all duration-300 ease-smooth lg:hidden',
      isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'  )} >
    <nav className="flex flex-col">
      {NAV_ITEMS.map((item, i) => {
        const classes = 'group flex items-center justify-between border-b border-line/10 py-5 font-headline text-3xl font-bold tracking-tight text-ink transition-colors hover:text-accent'
        const trail = (
          <Icon name="arrow_outward" size={22} className="text-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
        )
        const style = { animationDelay: `${i * 60}ms` } as React.CSSProperties

        return item.href.startsWith('#') ? (
          <a key={item.href}  onClick={onClose} className={classes} style={style}>  {item.label}  {trail}  </a>
        ) : (
          <Link key={item.href} to={item.href} onClick={onClose} className={classes} style={style}>
            {item.label}
            {trail}
          </Link>
        )
      })}
    </nav>

    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-2.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="text-label-sm text-muted">{AVAILABILITY}</span>
      </div>

      <Button as="a" href={`mailto:${CONTACT_EMAIL}`} variant="primary" size="lg" trailingDot fullWidth>
        Start a project
      </Button>

      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {FOOTER_SOCIAL.map(({ platform, href }) => (
          <a  key={platform}  target={href.startsWith('mailto') ? undefined : '_blank'}  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="text-label-sm text-muted transition-colors hover:text-accent"  >
            {platform}
          </a>
        ))}
      </div>
    </div>
  </div>
)
