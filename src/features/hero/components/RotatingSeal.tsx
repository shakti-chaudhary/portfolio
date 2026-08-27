import { Icon } from "@/components/ui"
import { cn } from "@/lib/utils"



interface RotatingSealProps {
    label?: string // text around circle
    href?: string
    className?: string 
}

export const RotatingSeal = ({label = 'OPEN FOR WORK · SAY HELLO · ', href = '#contact',className}: RotatingSealProps) => (
 <a href={href}  className={cn(
      'group relative grid h-32 w-32 shrink-0 place-items-center rounded-full md:h-36 md:w-36',
      className
    )} aria-label={label.replace(/./g,"").trim()} >
        
         {/* Rotating ring type */}
    <svg viewBox="0 0 100 100" className="badge-ring absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <path id="seal-path" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
      </defs>
      <text className="fill-muted font-headline text-[8.5px] font-semibold uppercase tracking-[0.24em]">
        <textPath href="#seal-path" startOffset="0">
          {label.repeat(2)}
        </textPath>
      </text>
    </svg>

    {/* Centre disc */}
    <span className={cn('grid h-[58%] w-[58%] place-items-center rounded-full bg-ink text-bg',
        'transition-all duration-300 ease-smooth group-hover:bg-accent group-hover:text-accent-ink' )}  >
      <Icon name="arrow_outward" size={26} className="transition-transform duration-300 ease-smooth group-hover:rotate-45" />
    </span>
    </a>
  )