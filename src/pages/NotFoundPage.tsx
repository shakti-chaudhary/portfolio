import React from 'react'
import { Container, Section } from '@/components/layout'
import { Button } from '@/components/ui'

const NotFoundPage: React.FC = () => (
  <Section spacing="xl" className="flex min-h-screen items-center">
    <Container>
      <div className="mx-auto max-w-xl text-center">
        <p className="display text-[26vw] leading-none text-accent/15 sm:text-[16rem]">404</p>
        <div className="-mt-8 sm:-mt-16">
          <h1 className="text-headline-xl text-ink">This page took a wrong turn</h1>
          <p className="prose-editorial mx-auto mt-5 max-w-md">
            The link is broken or the page has moved. Let's get you back to something that works.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button as="a" href="/" variant="primary" size="lg" trailingDot>
              Back home
            </Button>
            <Button as="a" href="/blog" variant="outline" size="lg">
              Read the journal
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </Section>
)

export default NotFoundPage
