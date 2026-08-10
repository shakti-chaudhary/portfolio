/**
 * Input.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Accessible, RHF-compatible input.
 *   • Label + helper text + error slots
 *   • Left/right adornments
 *   • forwardRef for React Hook Form
 *   • aria-invalid / aria-describedby wired up
 *
 *   <Input label="Name" error={errors.name?.message} {...register('name')} />
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  error?: string
  leftAdornment?: React.ReactNode
  rightAdornment?: React.ReactNode
  wrapperClassName?: string
}

const InputInner = (
  {
    label,
    helperText,
    error,
    leftAdornment,
    rightAdornment,
    id,
    className,
    wrapperClassName,
    required,
    disabled,
    ...props
  }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const reactId = React.useId()
  const inputId = id ?? `input-${reactId}`
  const errorId = `${inputId}-error`
  const helperId = `${inputId}-helper`
  const hasError = Boolean(error)

  return (
    <div className={cn('flex flex-col gap-2', wrapperClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            'font-headline text-xs font-semibold tracking-wide text-muted',
            hasError && 'text-red-500',
            disabled && 'opacity-50'
          )}
        >
          {label}
          {required && (
            <span className="ml-1 text-accent" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <div className="relative flex items-center">
        {leftAdornment && (
          <span className="pointer-events-none absolute left-4 text-muted">{leftAdornment}</span>
        )}

        <input
          ref={ref}
          id={inputId}
          aria-invalid={hasError}
          aria-describedby={
            [error && errorId, helperText && helperId].filter(Boolean).join(' ') || undefined
          }
          required={required}
          disabled={disabled}
          className={cn(
            'field w-full px-5 py-3.5 font-body text-sm text-ink',
            'placeholder:text-muted/55',
            hasError && 'border-red-500/60 focus:border-red-500',
            disabled && 'cursor-not-allowed opacity-50',
            leftAdornment && 'pl-11',
            rightAdornment && 'pr-11',
            className
          )}
          {...props}
        />

        {rightAdornment && (
          <span className="absolute right-4 text-muted">{rightAdornment}</span>
        )}
      </div>

      {hasError && (
        <p id={errorId} role="alert" className="text-xs font-medium text-red-500">
          {error}
        </p>
      )}

      {helperText && !hasError && (
        <p id={helperId} className="text-xs text-muted/80">
          {helperText}
        </p>
      )}
    </div>
  )
}

InputInner.displayName = 'Input'

export const Input = React.forwardRef(InputInner)
