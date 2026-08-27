import React from 'react'
import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui'
import { THEME_MODES, THEME_META } from '@/lib/constants'
import { useTheme } from '../hooks/useTheme'

interface ThemeToggleProps {
  variant?: 'segmented' | 'compact'
  className?: string
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ variant = 'segmented',className, }) => {
  const { mode, select, cycle } = useTheme()
  const activeIndex = THEME_MODES.indexOf(mode)

  if (variant === 'compact') {
    return (
      <button type="button" onClick={cycle} aria-label={`Theme: ${THEME_META[mode].label}. Switch theme`} title={`${THEME_META[mode].label} — ${THEME_META[mode].hint}`}
        className={cn('panel-soft grid h-11 w-11 place-items-center rounded-full', 'text-ink transition-transform duration-200 ease-smooth hover:scale-105 active:scale-95',
          className )} >
        <Icon name={THEME_META[mode].icon} size={19} />
      </button>
    )
  }

  return (
    <div role="radiogroup" aria-label="Colour theme"
      className={cn('panel-soft relative flex items-center gap-0.5 rounded-full p-1', className )}  >
      {/* Sliding indicator */}
      <span aria-hidden="true" className="absolute left-1 top-1 h-9 w-9 rounded-full bg-accent transition-transform duration-300 ease-smooth" style={{ transform: `translateX(${activeIndex * 2.375}rem)` }} />

      {THEME_MODES.map((theme) => {
        const isActive = theme === mode
        return (
          <button key={theme} type="button"  role="radio" aria-checked={isActive} aria-label={`${THEME_META[theme].label} theme — ${THEME_META[theme].hint}`}
            title={THEME_META[theme].hint} onClick={() => select(theme)}  
            className={cn( 'relative z-raised grid h-9 w-9 place-items-center rounded-full', 'transition-colors duration-200', isActive ? 'text-accent-ink' : 'text-muted hover:text-ink'  )}
          >
            <Icon name={THEME_META[theme].icon} size={17} />
          </button>
        )
      })}
    </div>
  )
}
