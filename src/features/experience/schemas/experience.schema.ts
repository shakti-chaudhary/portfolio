import { z } from 'zod'

export const skillItemSchema = z.object({
  id: z.string(),
  icon: z.string(),
  label: z.string(),
})

export const experienceSchema = z.object({
  id: z.string(),
  role: z.string(),
  company: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  bullets: z.array(z.string()).min(1).max(6),
})
