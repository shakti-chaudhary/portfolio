import React from 'react'
import { cn } from '@/lib/utils'

export interface DividerProps {
  variant?: 'solid' | 'dashed'
  className?: string
}

export const Divider: React.FC<DividerProps> = ({ variant = 'solid', className }) =>
  variant === 'dashed' ? (
    <hr className={cn('my-0 border-0 border-t border-dashed border-line/20', className)} />
  ) : (
    <hr className={cn('rule my-0', className)} />
  )
