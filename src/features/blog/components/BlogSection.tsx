import { Button, Icon, SectionHeading } from '@/components/ui'
import { Container, Section } from '@/components/layout'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { useBlog } from '../hooks/useBlog'
import BlogCard from './BlogCard'

function BlogSection() {
    const { featured } = useBlog();
    const preview = featured?.slice(0.2);
    
  return (
    <Section id='journal' spacing='lg' >
        <Container>
            <SectionHeading eyebrow='Journal' title={<>Notes on building for the{' '} <span className="display italic text-accent">long run</span></>}
            description="Patterns, trade-offs and lessons written down while they were still fresh."
            action={
            <Link to="/blog" className="group hidden items-center gap-2 font-headline text-sm font-semibold text-ink no-underline transition-colors hover:text-accent md:inline-flex" >
              All posts
            <Icon name="arrow_outward" size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"  />
            </Link>
            } />

            <div className="grid gap-7 md:grid-cols-2">
                {preview?.map((post, i) => (
                    <BlogCard key={post.id} post={post} featured className="animate-entrance" style={{ '--delay': `${i * 90}ms` } as React.CSSProperties} />
                ))}
            </div>

            <div className="mt-8 flex justify-center md:hidden">
             <Button as="a" href="/blog" variant="outline" size="md" trailingDot>
              View all posts
             </Button>
            </div>
            
        </Container>
    </Section>
  )
}

export default memo(BlogSection)