import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

type StatusType = "published" | "draft" | "scheduled" | "archived" | "active" | "inactive"

const statusConfig: Record<StatusType, { label: string; className: string }> = {
  published: {
    label: "게시중",
    className: "bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
  },
  draft: {
    label: "임시저장",
    className: "bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-100",
  },
  scheduled: {
    label: "예약됨",
    className: "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-100",
  },
  archived: {
    label: "보관됨",
    className: "bg-muted text-muted-foreground border-muted hover:bg-muted",
  },
  active: {
    label: "활성",
    className: "bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
  },
  inactive: {
    label: "비활성",
    className: "bg-muted text-muted-foreground border-muted hover:bg-muted",
  },
}

interface StatusBadgeProps {
  status: StatusType
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status]
  return (
    <Badge variant="outline" className={cn(config.className, className)}>
      {config.label}
    </Badge>
  )
}
