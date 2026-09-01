import React from 'react'
import { Icon } from '@/components/ui'
import { skillsData } from '../data/experience.data'

export const SkillsGrid: React.FC = () => (
  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
    {skillsData.map((skill) => (
      <div key={skill.id} className="panel-soft group flex flex-col gap-3 rounded-2xl p-5 transition-colors hover:border-accent/40" >
        <Icon name={skill.icon} size={24} className="text-muted transition-colors duration-200 group-hover:text-accent" />
        <span className="font-headline text-sm font-semibold text-ink">{skill.label}</span>
      </div>
    ))}
  </div>
)
