/**
 * Card.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Rounded surface container. `panel` / `panel-soft` come from components.css,
 * so each variant renders correctly in light, dark and glass automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface treatment */
  variant?: 'panel' | 'soft' | 'transparent'
  /** Corner radius preset */
  radius?: 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  /** Lift + accent border on hover */
  hoverable?: boolean
  /** Full height for equal-height grids */
  fullHeight?: boolean
  /** Internal padding preset */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  children?: React.ReactNode
  className?: string
}

const variantMap: Record<NonNullable<CardProps['variant']>, string> = {
  panel: 'panel',
  soft: 'panel-soft',
  transparent: 'bg-transparent',
}

const radiusMap: Record<NonNullable<CardProps['radius']>, string> = {
  md: 'rounded-lg',
  lg: 'rounded-xl',
  xl: 'rounded-2xl',
  '2xl': 'rounded-3xl',
  '3xl': 'rounded-4xl',
}

const paddingMap: Record<NonNullable<CardProps['padding']>, string> = {
  none: '',
  sm: 'p-5',
  md: 'p-7',
  lg: 'p-9',
  xl: 'p-11',
}

export const Card: React.FC<CardProps> = ({
  variant = 'panel',
  radius = 'xl',
  hoverable = false,
  fullHeight = false,
  padding = 'none',
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      'relative overflow-hidden',
      variantMap[variant],
      radiusMap[radius],
      paddingMap[padding],
      hoverable && 'hover-lift hover:border-accent/40',
      fullHeight && 'h-full',
      className
    )}
    {...props}
  >
    {children}
  </div>
)

/** Card sub-components for structured layout */
export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => <div className={cn('mb-6', className)}>{children}</div>

export const CardBody: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => <div className={className}>{children}</div>

export const CardFooter: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => <div className={cn('mt-7 border-t border-line/10 pt-6', className)}>{children}</div>
