import { memo } from 'react'
import { cn } from '@/lib/utils'
import { Icon, Input } from '@/components/ui'
import { Container, Section } from '@/components/layout'
import BlogCard from '@/features/blog/components/BlogCard'
import { useBlog, type BlogCategory } from '@/features/blog'

const CATEGORIES: { label: string; value: BlogCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Engineering', value: 'engineering' },
  { label: 'Architecture', value: 'architecture' },
  { label: 'DevOps', value: 'devops' },
  { label: 'Career', value: 'career' },
]

const BlogPage = () => {
 const { posts, activeCategory, searchQuery, setCategory, setSearch } = useBlog()

  return (
    <main className="pt-32">
      <Section spacing="md">
        <Container>
          {/* Header */}
          <div className="mb-14 max-w-3xl">
            <p className="eyebrow mb-5 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Journal
            </p>
            <h1 className="text-display text-balance text-ink">
              Notes from the <span className="display italic text-accent">build</span>
            </h1>
            <p className="prose-editorial mt-6 text-pretty">
              Writing on full-stack engineering, system architecture, and the craft of software.
            </p>
          </div>

          {/* Search + filters */}
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <Input placeholder="Search posts…"  value={searchQuery} onChange={(e) => setSearch(e.target.value)} leftAdornment={<Icon name="search" size={18} />}  wrapperClassName="w-full md:max-w-sm" aria-label="Search posts" />

            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(({ label, value }) => (
                <button key={value} type="button" onClick={() => setCategory(value)} aria-pressed={activeCategory === value}
                 className={cn( 'rounded-full px-4 py-2 font-headline text-xs font-semibold transition-all duration-200', activeCategory === value ? 'bg-ink text-bg' : 'panel-soft text-muted hover:text-ink'  )} >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <p className="mb-7 text-xs text-muted">
            {posts.length} {posts.length === 1 ? 'post' : 'posts'}
          </p>

          {posts.length > 0 ? (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => ( <BlogCard key={post.id} post={post} />   ))}
            </div>
          ) : (
            <div className="panel-soft rounded-3xl py-24 text-center">
              <Icon name="search_off" size={44} className="mx-auto mb-4 text-muted/50" />
              <p className="font-headline font-semibold text-ink">No posts found</p>
              <p className="mt-2 text-sm text-muted">Try a different search or category.</p>
            </div>
          )}
        </Container>
      </Section>
    </main>
  )
}

export default memo(BlogPage)