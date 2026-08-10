/**
 * lib/utils.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Shared utility functions. These are PURE functions — no React, no Redux,
 * no side effects. Easily unit-testable.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * cn()
 * Combines clsx (conditional classes) with tailwind-merge (dedup Tailwind
 * classes). This is the standard way to compose className in this project.
 *
 * @example
 *   cn('px-4 py-2', isActive && 'bg-primary', className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * formatDate()
 * Returns a human-readable date string.
 *
 * @example
 *   formatDate('2024-01-15') → 'January 15, 2024'
 */
export function formatDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
): string {
  return new Date(dateString).toLocaleDateString('en-US', options)
}

/**
 * formatDateShort()
 * Short month/year for timeline labels.
 *
 * @example
 *   formatDateShort('2023-01-01') → 'JAN 2023'
 */
export function formatDateShort(dateString: string): string {
  return new Date(dateString)
    .toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    .toUpperCase()
}

/**
 * slugify()
 * Converts a string to a URL-safe slug.
 *
 * @example
 *   slugify('Hello World 2024') → 'hello-world-2024'
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * truncate()
 * Truncates a string to maxLength and appends ellipsis.
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength).trimEnd() + '...'
}

/**
 * clamp()
 * Clamps a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * generateId()
 * Generates a short random ID for local state (not production UUIDs).
 */
export function generateId(): string {
  return Math.random().toString(36).slice(2, 9)
}

/**
 * isValidEmail()
 * Basic email validation (Zod handles full validation).
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * groupBy()
 * Groups an array of objects by a key.
 *
 * @example
 *   groupBy(posts, 'category') → { tech: [...], design: [...] }
 */
export function groupBy<T>(items: T[], key: keyof T): Record<string, T[]> {
  return items.reduce(
    (acc, item) => {
      const group = String(item[key])
      return { ...acc, [group]: [...(acc[group] ?? []), item] }
    },
    {} as Record<string, T[]>
  )
}

/**
 * wait()
 * Promise-based delay. Useful in async handlers.
 */
export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * capitalize()
 * Capitalizes the first letter of a string.
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * pick()
 * Picks specified keys from an object.
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce(
    (acc, key) => {
      if (key in obj) acc[key] = obj[key]
      return acc
    },
    {} as Pick<T, K>
  )
}

/**
 * omit()
 * Omits specified keys from an object.
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj }
  keys.forEach((key) => delete result[key])
  return result as Omit<T, K>
}

/**
 * readingTime()
 * Estimates reading time for a given text (200 wpm).
 *
 * @example
 *   readingTime('...long article...') → '5 min read'
 */
export function readingTime(text: string): string {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}
