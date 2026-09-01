import type { z } from 'zod'
import type { experienceSchema, skillItemSchema } from '../schemas/experience.schema'

export type Experience = z.infer<typeof experienceSchema>
export type SkillItem = z.infer<typeof skillItemSchema>
