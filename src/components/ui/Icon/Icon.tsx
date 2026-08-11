/**
 * Usage:
 *   <Icon name="arrow_forward" size={20} />
 *   <Icon name="terminal" filled className="text-primary" />
 */
import React from 'react'
import { cn } from '@/lib/utils'

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string
  size?: number
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700
  filled?: boolean
  grade?: -25 | 0 | 200
  opticalSize?: 20 | 24 | 40 | 48
  'aria-label'?: string
  'aria-hidden'?: boolean | 'true' | 'false'
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  weight = 400,
  filled = false,
  grade = 0,
  opticalSize = 24,
  className,
  style,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}) => (
  <span
    className={cn('material-symbols-outlined leading-none select-none', className)}
    style={{
      fontSize: size,
      fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
      ...style,
    }}
    aria-label={ariaLabel}
    aria-hidden={ariaLabel ? undefined : (ariaHidden ?? 'true')}
    role={ariaLabel ? 'img' : undefined}
    {...props}
  >
    {name}
  </span>
)
