import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  label: string
  description?: string
  className?: string
}

export function SectionHeading({ label, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="section-line-heading">{label}</div>
      {description ? <p className="max-w-2xl">{description}</p> : null}
    </div>
  )
}
