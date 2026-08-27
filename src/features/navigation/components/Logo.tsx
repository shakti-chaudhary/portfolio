import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { SITE_NAME } from '@/lib/constants'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const textSize = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-3xl',
}

const markSize = {
  sm: 'h-7 w-7',
  md: 'h-9 w-9',
  lg: 'h-11 w-11',
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', className }) => (
  <Link to="/" aria-label={`${SITE_NAME} — home`}  className={cn('group inline-flex items-center gap-2.5 no-underline', className)} >
    <span className={cn('grid shrink-0 place-items-center rounded-full bg-ink text-bg', 'transition-transform duration-500 ease-smooth group-hover:rotate-90',  markSize[size])} >
      <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="none" aria-hidden="true">
        <path d="M12 2c.9 4.2 2.9 6.2 7.1 7.1-4.2.9-6.2 2.9-7.1 7.1-.9-4.2-2.9-6.2-7.1-7.1C9.1 8.2 11.1 6.2 12 2Z" fill="currentColor"   />
        <path d="M12 16.2c.5 2.6 1.6 3.7 4.2 4.2-2.6.5-3.7 1.6-4.2 4.2" fill="currentColor" />
      </svg>
    </span>
    <span className={cn('display leading-none text-ink', textSize[size])}>{SITE_NAME}</span>
  </Link>
)
