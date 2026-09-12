import type { z } from 'zod'
import type { blogPostSchema } from '../schemas/blog.schema'

export type BlogPost = z.infer<typeof blogPostSchema>
export type BlogCategory = 'all' | 'engineering' | 'architecture' | 'devops' | 'career'
