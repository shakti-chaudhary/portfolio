import { Icon } from "@/components/ui"
import { techStackData } from "../data/techStack.data"
import { cn } from "@/lib/utils"

interface TechMarqueeProps {
    className?: string
}
interface TrackProps {
    ariaHidden?: boolean
}

const Track = ({ariaHidden}: TrackProps) =>(
<div className="marquee__track" aria-hidden={ariaHidden || undefined}>
    {
        techStackData?.map(tech => (
          <span key={tech.id}
           className="inline-flex items-center gap-3 font-headline text-lg font-semibold text-muted transition-colors hover:text-ink md:text-xl">
            <Icon name={tech.icon} size={20} className="text-accent" />
            {tech.label}
            <span aria-hidden="true" className="ml-3 h-1 w-1 rounded-full bg-line/30" />
          </span>
        ))
    }
</div>
)

export const TechMarquee = ({ className }: TechMarqueeProps) => (
    <div className={cn("marquee select-none py-2",className)}>
        <Track />
        <Track ariaHidden />
    </div>
)