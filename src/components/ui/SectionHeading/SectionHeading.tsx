/**
 * SectionHeading.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * The shared editorial heading used at the top of every section:
 *
 *   ── EYEBROW
 *   Big headline with a *serif accent* word
 *   optional supporting line            [ optional action slot ]
 * ─────────────────────────────────────────────────────────────────────────────
 */
import React from 'react'
import { cn } from '@/lib/utils'

export interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  /** Right-aligned slot (a link or button) — hidden on small screens */
  action?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  action,
  align = 'left',
  className,
}) => (
  <div
    className={cn(
      'mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between',
      align === 'center' && 'md:flex-col md:items-center md:text-center',
      className
    )}
  >
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto')}>
      {eyebrow && (
        <p
          className={cn(
            'eyebrow mb-5 flex items-center gap-3',
            align === 'center' && 'justify-center'
          )}
        >
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          {eyebrow}
        </p>
      )}

      <h2 className="text-headline-xl text-balance text-ink">{title}</h2>

      {description && (
        <p className={cn('prose-editorial mt-5 text-pretty', align === 'center' && 'mx-auto')}>
          {description}
        </p>
      )}
    </div>

    {action && <div className="shrink-0">{action}</div>}
  </div>
)
