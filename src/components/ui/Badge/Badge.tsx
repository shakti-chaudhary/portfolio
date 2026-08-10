import React from 'react'
import { cn } from '@/lib/utils'

export type BadgeVariant = 'outline' | 'soft' | 'accent' | 'solid' | 'ghost'
export type BadgeSize = 'xs' | 'sm' | 'md'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  children: React.ReactNode
}

const variantMap: Record<BadgeVariant, string> = {
  outline: 'border border-line/20 text-muted',
  soft: 'panel-soft text-muted',
  accent: 'bg-accent/12 text-accent border border-accent/25',
  solid: 'bg-ink text-bg',
  ghost: 'text-muted',
}

const sizeMap: Record<BadgeSize, string> = {
  xs: 'h-6 px-2.5 text-2xs',
  sm: 'h-7 px-3 text-2xs',
  md: 'h-9 px-4 text-xs',
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'outline',
  size = 'sm',
  className,
  children,
  ...props
}) => (
  <span
    className={cn(
      'inline-flex items-center justify-center gap-1.5 rounded-full whitespace-nowrap',
      'font-headline font-semibold uppercase tracking-wider',
      variantMap[variant],
      sizeMap[size],
      className
    )}
    {...props}
  >
    {children}
  </span>
)
