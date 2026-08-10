/**
 * lib/validators.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Shared Zod primitive validators reused across feature schemas.
 * Feature-specific schemas live in features/{name}/schemas/
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { z } from 'zod'

// ─── Primitives ───────────────────────────────────────────────────────────
export const zEmail = z
  .string({ required_error: 'Email is required' })
  .email('Please enter a valid email address')
  .max(254, 'Email must be under 254 characters')

export const zName = z
  .string({ required_error: 'Name is required' })
  .min(2, 'Name must be at least 2 characters')
  .max(100, 'Name must be under 100 characters')
  .trim()

export const zUrl = z
  .string()
  .url('Please enter a valid URL')
  .optional()
  .or(z.literal(''))

export const zSlug = z
  .string()
  .min(1, 'Slug is required')
  .max(100)
  .regex(/^[a-z0-9-]+$/, 'Slug may only contain lowercase letters, numbers, and hyphens')

export const zDateString = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}/, 'Date must be in YYYY-MM-DD format')

export const zNonEmptyString = (field = 'Field') =>
  z.string({ required_error: `${field} is required` }).min(1, `${field} cannot be empty`).trim()

// ─── Reusable field shapes ─────────────────────────────────────────────────
export const zMessage = z
  .string({ required_error: 'Message is required' })
  .min(10, 'Message must be at least 10 characters')
  .max(2000, 'Message must be under 2000 characters')
  .trim()

export const zTag = z
  .string()
  .min(1)
  .max(30)
  .regex(/^[a-zA-Z0-9\s.+#-]+$/, 'Tag contains invalid characters')

export const zTagArray = z
  .array(zTag)
  .min(1, 'At least one tag is required')
  .max(10, 'Maximum 10 tags allowed')

// ─── Exported schema types ─────────────────────────────────────────────────
export type ZEmail = z.infer<typeof zEmail>
export type ZName = z.infer<typeof zName>
export type ZSlug = z.infer<typeof zSlug>
