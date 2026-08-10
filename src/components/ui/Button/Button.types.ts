import type React from 'react'

export type ButtonVariant =
  | 'primary'
  | 'accent'
  | 'outline'
  | 'soft'
  | 'ghost'
  | 'link'
  | 'danger'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  loadingText?: string
  fullWidth?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  /** Renders the signature arrow disc on the trailing edge */
  trailingDot?: boolean
  className?: string
  children?: React.ReactNode
  /** Render as anchor tag */
  as?: 'a' | 'button'
  href?: string
  target?: string
  rel?: string
}
