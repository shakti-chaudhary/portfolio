import type { z } from 'zod'
import type { projectSchema, projectTagSchema } from '../schemas/project.schema'

export type ProjectTag = z.infer<typeof projectTagSchema>
export type Project = z.infer<typeof projectSchema>

export type ProjectCategory = 'all' | 'mern' | 'backend' | 'frontend' | 'fullstack'
