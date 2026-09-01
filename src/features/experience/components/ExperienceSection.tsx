import { Container, Section } from '@/components/layout'
import { Icon, SectionHeading } from '@/components/ui'
import { memo } from 'react'
import { experienceData } from '../data/experience.data'
import ExperienceItem from './ExperienceItem'
import { SkillsGrid } from './SkillsGrid'
import { SITE_OWNER, SITE_ROLE } from '@/lib/constants'

function ExperienceSection() {
  return (
    <Section id="journey" spacing="lg" background="band" className="rounded-4xl">
    <Container>
      <SectionHeading
        eyebrow="The journey"
        title={
          <>
            Years of <span className="display italic text-accent">practice</span>, condensed
          </>
        }
        description="Where I've worked, what I shipped there, and the tools I reach for by instinct."
      />

      <div className="grid gap-7 lg:grid-cols-12">
        {/* Timeline */}
        <div className="panel rounded-3xl p-8 md:p-10 lg:col-span-7">
          <div className="mb-9 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/12 text-accent">
              <Icon name="timeline" size={20} />
            </span>
            <h3 className="font-headline text-lg font-bold text-ink">Experience</h3>
          </div>

          <ol className="relative space-y-10 before:absolute before:bottom-2 before:left-1.75 before:top-2 before:w-px before:bg-line/15">
            {experienceData.map((exp, i) => (
              <ExperienceItem key={exp.id} experience={exp} isActive={i === 0} />
            ))}
          </ol>
        </div>

        {/* Capabilities + quote */}
        <div className="flex flex-col gap-7 lg:col-span-5">
          <div className="panel rounded-3xl p-8 md:p-10" id="capabilities">
            <div className="mb-8 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/12 text-accent">
                <Icon name="hub" size={20} />
              </span>
              <h3 className="font-headline text-lg font-bold text-ink">Capabilities</h3>
            </div>
            <SkillsGrid />
          </div>

          <blockquote className="panel rounded-3xl p-8 md:p-10">
            <Icon name="format_quote" size={32} className="text-accent" />
            <p className="mt-4 font-display text-2xl leading-snug text-ink">
              Code is not just logic; it's architecture for everything built on top of it.
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-label-xs text-muted">
                {SITE_OWNER} · {SITE_ROLE}
              </span>
            </footer>
          </blockquote>
        </div>
      </div>
    </Container>
  </Section>
  )
}

export default memo(ExperienceSection)