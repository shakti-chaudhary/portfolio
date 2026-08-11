
import React from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  background?: 'default' | 'band' | 'transparent'
  children: React.ReactNode
  className?: string
}

const spacingMap: Record<NonNullable<SectionProps['spacing']>, string> = {
  none: '',
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-20 md:py-28',
  xl: 'py-24 md:py-36',
}

const bgMap: Record<NonNullable<SectionProps['background']>, string> = {
  default: 'bg-transparent',
  band: 'bg-bg-alt/60',
  transparent: 'bg-transparent',
}

export const Section: React.FC<SectionProps> = ({
  spacing = 'lg',
  background = 'default',
  className,
  children,
  ...props
}) => (
  <section
    className={cn('relative', spacingMap[spacing], bgMap[background], className)}
    {...props}
  >
    {children}
  </section>
)
