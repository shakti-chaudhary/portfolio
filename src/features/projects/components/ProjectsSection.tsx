import { memo } from 'react'
import ProjectCard from './ProjectCard'
import { useProjects } from '../hooks/useProjects'
import { Container, Section } from '@/components/layout'
import { Button, SectionHeading } from '@/components/ui'

function ProjectsSection() {
    const { projects } = useProjects()
    
  return (
    <Section id='work' spacing='lg' >
      <Container>
        <SectionHeading eyebrow='Selected work' title={
          <>Things I've built.{' '} <span className="display italic text-accent">shipped</span> and maintained </>
        } 
         description="A few systems that made it to production — where the constraints were real and the performance had to hold."
         action={<Button as='a' variant='outline' size='md' trailingDot> Start a project </Button> }
        />

        {/* projects card */}
        <div className="grid gap-7 md:grid-cols-2">
          {projects?.map((project,i) => (
            <ProjectCard key={project.id} project={project} className='animate-entrance' style={{ '--delay': `${i * 90}ms` } as React.CSSProperties} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default memo(ProjectsSection)