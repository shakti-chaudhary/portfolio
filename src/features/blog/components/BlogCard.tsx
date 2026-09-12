import React, { memo } from 'react'
import type { BlogPost } from '../types/blog.types'
import { cn, formatDate } from '@/lib/utils'
import { Link } from 'react-router-dom'
import { Badge, Icon } from '@/components/ui'

interface BlogCardProps extends React.HTMLAttributes<HTMLElement> {
    post: BlogPost
    featured?: boolean
    className?: string
}

const BlogCard = ({ post, featured = false, className, ...rest} : BlogCardProps) => {
  return (
    <article className={cn('panel group rounded-3xl hover-lift hover:border-accent/30', className)} {...rest} >
        <Link to={`/blog/${post.slug}`} className="flex h-full flex-col p-8 no-underline md:p-9">
          <div className="mb-6 flex items-center gap-3">
            <Badge variant="accent" size="xs">
              {post.category}
            </Badge>
            <span className="text-xs text-muted">{post.readingTimeMinutes} min read</span>
          </div>
    
          <h3 className={cn('font-headline font-bold tracking-tight text-ink transition-colors group-hover:text-accent', featured ? 'text-2xl' : 'text-xl'  )} >
            {post.title}
          </h3>
    
          <p className="prose-editorial mt-4 line-clamp-3 text-sm text-pretty">{post.excerpt}</p>
    
          <div className="mt-auto flex items-center justify-between gap-4 pt-8">
            <span className="text-xs text-muted">
              {formatDate(post.publishedAt, { year: 'numeric', month: 'short', day: 'numeric' })}
            </span>
            <span className="inline-flex items-center gap-2 font-headline text-xs font-semibold text-ink transition-colors group-hover:text-accent">
              Read
              <Icon name="arrow_outward" size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"  />
            </span>
          </div>
        </Link>
    </article>
  )
}

export default memo(BlogCard)