import { memo } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useBlog } from '../hooks/useBlog'
import { Container, Section } from '@/components/layout'
import { Badge, Button, Icon } from '@/components/ui'
import { formatDate } from '@/lib/utils'

const BlogPostView = () => {
  const { slug } = useParams<{ slug: string }>()
  const { posts } = useBlog()
  const post = posts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <Section spacing="md" className="pt-32">
      <Container size="md">
        <Link to="/blog" className="group mb-10 inline-flex items-center gap-2 font-headline text-sm font-semibold text-muted no-underline transition-colors hover:text-accent" >
          <Icon name="arrow_back" size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to journal
        </Link>

        <article>
          <header className="mb-10 border-b border-line/10 pb-10">
            <Badge variant="accent" size="sm" className="mb-6">
              {post.category}
            </Badge>
            <h1 className="text-headline-xl text-balance text-ink">{post.title}</h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted">
              <span>{formatDate(post.publishedAt)}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readingTimeMinutes} min read</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="soft" size="xs"> {tag} </Badge>
              ))}
            </div>
          </header>

          <div className="prose-editorial whitespace-pre-line text-pretty">{post.content}</div>
        </article>

        <div className="panel mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl p-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-headline text-lg font-bold text-ink">Working on something similar?</p>
            <p className="mt-1 text-sm text-muted">Happy to trade notes or lend a hand.</p>
          </div> 
          {/* href={`mailto:${CONTACT_EMAIL}`} */}
          <Button as="a"  variant="primary" size="md" trailingDot>
            Get in touch
          </Button>
        </div>
      </Container>
    </Section>
  )
}

export default memo(BlogPostView)