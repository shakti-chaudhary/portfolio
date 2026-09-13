import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container } from '@/components/layout'
import { Icon } from '@/components/ui'
import { SITE_OWNER, SITE_ROLE, NAV_ITEMS, FOOTER_SOCIAL, CONTACT_EMAIL, CONTACT_LOCATION, } from '@/lib/constants'
import { Logo } from './Logo'

export const Footer: React.FC = () => (
  <footer className="relative mt-10 border-t border-line/10 pb-10 pt-16">
    <Container>
      <div className="grid gap-12 md:grid-cols-12">
        {/* Identity */}
        <div className="md:col-span-5">
          <Logo size="md" />
          <p className="prose-editorial mt-5 max-w-sm">
            {SITE_ROLE} — building fast, durable products for teams that care about the details.
          </p>
          <a // href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-flex items-center gap-2 font-headline text-lg font-semibold text-ink transition-colors hover:text-accent"  >
            {CONTACT_EMAIL}
            <Icon name="arrow_outward" size={18} />
          </a>
        </div>

        {/* Sitemap */}
        <nav className="md:col-span-3" aria-label="Footer">
          <p className="eyebrow mb-5">Explore</p>
          <ul className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => {
              const isHashLink = item.href.startsWith('#')

              return (
              <li key={item.href}>
                  <Link to={isHashLink ? `/${item.href}` : item.href} className="text-muted transition-colors hover:text-accent">
                    {item.label}
                  </Link> <NavLink to={''} target='_blank' />
              </li>
            )})}
          </ul>
        </nav>

        {/* Elsewhere */}
        <div className="md:col-span-4">
          <p className="eyebrow mb-5">Elsewhere</p>
          <ul className="flex flex-col gap-3">
            {FOOTER_SOCIAL.map(({ platform, href }) => (
              <li key={platform}>
                <NavLink  // href={href} 
                  to='' target={href.startsWith('mailto') ? undefined : '_blank'} rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="group inline-flex pointer-events-none items-center gap-2 text-muted transition-colors hover:text-accent"   >
                  {platform}
                  <Icon name="arrow_outward" size={15} className="opacity-0 transition-all duration-200 group-hover:opacity-100" />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line/10 pt-8 md:flex-row">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {SITE_OWNER}. Designed and built end to end.
        </p>
        <p className="text-xs text-muted">{CONTACT_LOCATION}</p>
      </div>
    </Container>
  </footer>
)
