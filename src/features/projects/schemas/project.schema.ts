import { z } from 'zod'

export const projectTagSchema = z.string().min(1).max(30)

export const projectSchema = z.object({
  id: z.string(),
  title: z.string().min(1).max(100),
  subtitle: z.string().optional(),
  description: z.string().min(1),
  imageUrl: z.string().url().optional(),
  imageAlt: z.string().optional(),
  tags: z.array(projectTagSchema).min(1).max(10),
  category: z.enum(['mern', 'backend', 'frontend', 'fullstack']),
  liveUrl: z.string().url().optional().or(z.literal('')),
  sourceUrl: z.string().url().optional().or(z.literal('')),
  featured: z.boolean().default(false),
  year: z.number().int().min(2000).max(2100),
  status: z.enum(['live', 'wip', 'archived']).default('live'),
})

export type ProjectFormData = z.infer<typeof projectSchema>
