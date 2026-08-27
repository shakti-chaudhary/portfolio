import { AVAILABILITY } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface StatusBadgeProps {
    className?: string
}

export const StatusBadge = ({className}: StatusBadgeProps) => (
    <div className={cn('panel-soft inline-flex items-center gap-2.5 rounded-full py-2 pl-3 pr-4',className)}>
        {/* Pulse dot */}
      <span className="relative flex h-2 w-2">
         <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent" />
         <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
       </span>
      <span className="text-label-sm text-muted">{AVAILABILITY}</span>
    </div>
)
