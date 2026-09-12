import { z } from 'zod'
import { zSlug, zTagArray, zDateString } from '@/lib/validators'

export const blogPostSchema = z.object({
  id: z.string(),
  title: z.string().min(1).max(120),
  slug: zSlug,
  excerpt: z.string().min(10).max(300),
  content: z.string().min(1),
  coverImage: z.string().url().optional(),
  coverImageAlt: z.string().optional(),
  tags: zTagArray,
  category: z.enum(['engineering', 'architecture', 'devops', 'career']),
  publishedAt: zDateString,
  updatedAt: zDateString.optional(),
  readingTimeMinutes: z.number().int().positive(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
})
