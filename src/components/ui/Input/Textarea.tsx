import React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  helperText?: string
  error?: string
  wrapperClassName?: string
}

const TextareaInner = (
  {
    label,
    helperText,
    error,
    id,
    className,
    wrapperClassName,
    required,
    disabled,
    rows = 5,
    ...props
  }: TextareaProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) => {
  const reactId = React.useId()
  const inputId = id ?? `textarea-${reactId}`
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
            hasError && 'text-red-500'
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

      <textarea
        ref={ref}
        id={inputId}
        aria-invalid={hasError}
        aria-describedby={
          [error && errorId, helperText && helperId].filter(Boolean).join(' ') || undefined
        }
        required={required}
        disabled={disabled}
        rows={rows}
        className={cn(
          'field w-full resize-y px-5 py-4 font-body text-sm text-ink',
          'placeholder:text-muted/55',
          hasError && 'border-red-500/60 focus:border-red-500',
          disabled && 'cursor-not-allowed opacity-50',
          className
        )}
        {...props}
      />

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

TextareaInner.displayName = 'Textarea'

export const Textarea = React.forwardRef(TextareaInner)
