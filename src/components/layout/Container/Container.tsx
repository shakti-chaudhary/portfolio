/**
 * Container.tsx
 * Max-width content wrapper. Use for every page section.
 * Handles horizontal padding + centering.
 */
import React from 'react'
import { cn } from '@/lib/utils'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  children: React.ReactNode
  className?: string
}

const sizeMap: Record<NonNullable<ContainerProps['size']>, string> = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-container',
  full: 'max-w-full',
}

export const Container: React.FC<ContainerProps> = ({
  size = 'xl',
  className,
  children,
  ...props
}) => (
  <div className={cn('mx-auto w-full px-5 sm:px-8 lg:px-10', sizeMap[size], className)} {...props}>
    {children}
  </div>
)
