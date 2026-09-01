import  { memo } from 'react'
import type { Project } from '../types/projects.types'
import { cn } from '@/lib/utils'
import { Badge, Icon } from '@/components/ui'


interface ProjectCardProps extends React.HTMLAttributes<HTMLElement> {
    project: Project
    className?: string
}

function ProjectCard({project,className,...rest} : ProjectCardProps) {
    const hasSource = Boolean(project.sourceUrl)
    const hasLive = Boolean(project.liveUrl)
  return (
    <article className={cn('panel group flex flex-col overflow-hidden rounded-3xl p-3 hover-lift hover:border-accent/30',className)} {...rest} >
        
     {/* media */}
     {project.imageUrl && (
        <div className='media-frame relative aspect-16/11 w-full rounded-2xl'>
            <img src={project.imageUrl} alt={project.imageAlt ?? project.title} loading='lazy'
            className='h-full w-full object-cover transition-transform duration-900 ease-smooth group-hover:scale-[1.06]' />
            {/* meta chips */}
            <div className='absolute left-4 top-4 flex gap-2'>
                {project.subtitle && (
                    <span className="rounded-full bg-black/45 px-3 py-1.5 font-headline text-2xs font-semibold uppercase tracking-wider text-white backdrop-blur-md ">
                        {project.subtitle}
                    </span>
                )}
                {project.status === 'live' && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/45 px-3 py-1.5 font-headline text-2xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Live
                    </span>
                )}
            </div>

            <span className="absolute right-4 top-4 rounded-full bg-black/45 px-3 py-1.5 font-headline text-2xs font-semibold text-white backdrop-blur-md">
            {project.year}
            </span>

            {/* hover actions */}
            <div className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center gap-2 opacity-0 transition-all duration-300 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
            {hasLive && ( // href={project.liveUrl}
              <a target="_blank" rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white/95 px-4 py-2.5 font-headline text-xs font-semibold text-neutral-900 backdrop-blur transition-colors hover:bg-white" >
                <Icon name="open_in_new" size={16} />
                Live demo
              </a>
            )}
            {hasSource && ( // href={project.sourceUrl}
              <a target="_blank" rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-black/55 px-4 py-2.5 font-headline text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-black/70" >
                <Icon name="code" size={16} />
                Source
              </a>
            )}
          </div>
        </div>
     )}

     {/* details */}
     <div className="flex flex-1 flex-col px-4 pb-5 pt-6">
        <h3 className="text-headline-md text-ink transition-colors group-hover:text-accent">
          {project.title}
        </h3>

        <p className="prose-editorial mt-3 text-sm text-pretty">{project.description}</p>

         <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-line/10 pt-5">
          {project.tags.map((tag) => ( <Badge key={tag} variant="soft" size="xs"> {tag} </Badge> ))}
          <Icon name="arrow_outward" size={18} className="ml-auto text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
     </div>
     
    </article>
  )
}

export default memo(ProjectCard)