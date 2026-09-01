import { cn } from '@/lib/utils'
import { formatDateShort } from '@/lib/utils'
import type { Experience } from '../types/experience.types'
import { memo } from 'react'

interface ExperienceItemProps {
  experience: Experience
  isActive?: boolean
}

function ExperienceItem ({ experience, isActive = false } : ExperienceItemProps){
  
  return (
  <li className="relative pl-9">
    {/* Rail marker */}
    <span aria-hidden="true" className={cn( 'absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full', isActive ? 'bg-accent/20' : 'bg-line/10' )} >
      <span className={cn('h-2 w-2 rounded-full', isActive ? 'animate-pulse-dot bg-accent' : 'bg-muted/60' )} />
    </span>

    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
      <div>
        <h4 className="font-headline text-lg font-bold text-ink">{experience.role}</h4>
        <p className="text-sm font-medium text-accent">{experience.company}</p>
      </div>
      <span className="shrink-0 text-label-xs text-muted">
        {formatDateShort(experience.startDate)} —{' '}
        {experience.current ? 'Present' : experience.endDate ? formatDateShort(experience.endDate) : ''}
      </span>
    </div>

    <ul className="mt-4 space-y-3">
      {experience.bullets.map((bullet, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
          <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
          {bullet}
        </li>
      ))}
    </ul>
  </li>
)
}

export default memo(ExperienceItem)
