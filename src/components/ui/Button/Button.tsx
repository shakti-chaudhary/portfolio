/**
 * Button.tsx
 * Pill-shaped button system. Renders as <button> or <a> via the `as` prop.
 *
 *   <Button variant="primary" size="lg">Start a project</Button>
 *   <Button as="a" href="/blog" variant="outline">Journal</Button>
 *   <Button variant="primary" trailingDot>View all work</Button>   ← arrow disc
 */
import React from 'react'
import { cn } from '@/lib/utils'
import { Spinner } from '../Spinner'
import { Icon } from '../Icon'
import type { ButtonProps } from './Button.types'

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-ink text-bg hover:bg-accent hover:text-accent-ink shadow-soft',
  accent:
    'bg-accent text-accent-ink hover:brightness-110 shadow-soft',
  outline:
    'border border-line/25 text-ink hover:border-accent/60 hover:text-accent bg-transparent',
  soft:
    'panel-soft text-ink hover:text-accent',
  ghost:
    'text-muted hover:text-ink bg-transparent',
  link:
    'text-accent underline-offset-4 hover:underline px-0 py-0 rounded-none',
  danger:
    'border border-red-500/40 text-red-500 hover:bg-red-500/10 bg-transparent',
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  xs: 'h-8 px-4 text-2xs tracking-wide',
  sm: 'h-10 px-5 text-xs',
  md: 'h-12 px-6 text-sm',
  lg: 'h-14 px-7 text-sm',
  xl: 'h-16 px-9 text-base',
}

/** Padding shrinks on the trailing side when the arrow disc is shown */
const dotPadding: Record<NonNullable<ButtonProps['size']>, string> = {
  xs: 'pr-1',
  sm: 'pr-1',
  md: 'pr-1.5',
  lg: 'pr-2',
  xl: 'pr-2.5',
}

const dotSize: Record<NonNullable<ButtonProps['size']>, string> = {
  xs: 'h-6 w-6',
  sm: 'h-8 w-8',
  md: 'h-9 w-9',
  lg: 'h-10 w-10',
  xl: 'h-12 w-12',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ButtonInner = (props: ButtonProps, ref: React.ForwardedRef<any>) => {
  const {
    as: Tag = 'button',
    variant = 'primary',
    size = 'md',
    isLoading = false,
    loadingText,
    fullWidth = false,
    leftIcon,
    rightIcon,
    trailingDot = false,
    className,
    children,
    disabled,
    href,
    target,
    rel,
    ...rest
  } = props

  const isDisabled = disabled || isLoading

  const classes = cn(
    'group/btn relative inline-flex items-center justify-center gap-2.5 rounded-full',
    'font-headline font-semibold no-underline select-none cursor-pointer',
    'transition-all duration-200 ease-smooth active:scale-[0.97]',
    variantClasses[variant],
    sizeClasses[size],
    trailingDot && dotPadding[size],
    fullWidth && 'w-full',
    isDisabled && 'cursor-not-allowed opacity-50 pointer-events-none',
    className
  )

  const content = (
    <>
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center gap-2">
          <Spinner size="sm" />
          {loadingText && <span className="text-current">{loadingText}</span>}
        </span>
      )}
      <span className={cn('inline-flex items-center gap-2.5', isLoading && 'invisible')}>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && !trailingDot && <span className="shrink-0">{rightIcon}</span>}
      </span>
      {trailingDot && !isLoading && (
        <span
          aria-hidden="true"
          className={cn(
            'grid shrink-0 place-items-center rounded-full bg-bg/15 backdrop-blur-sm',
            'transition-transform duration-300 ease-smooth group-hover/btn:rotate-45',
            dotSize[size]
          )}
        >
          <Icon name="arrow_outward" size={16} />
        </span>
      )}
    </>
  )

  if (Tag === 'a') {
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        aria-disabled={isDisabled}
        className={classes}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      ref={ref}
      disabled={isDisabled}
      aria-busy={isLoading}
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  )
}

ButtonInner.displayName = 'Button'
export const Button = React.forwardRef(ButtonInner)
