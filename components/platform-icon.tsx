import { ArrowUpRight, Github, Instagram, Linkedin, Mail, Youtube } from "lucide-react"

import { cn } from "@/lib/utils"

type PlatformIconProps = {
  icon: string
  className?: string
}

export function PlatformIcon({ icon, className }: PlatformIconProps) {
  if (icon === "x") {
    return (
      <svg
        aria-hidden
        className={cn("h-4 w-4", className)}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M18.901 3H21L14.092 10.889L22 21H15.811L10.963 14.868L5.55 21H3.45L10.84 12.622L2 3H8.346L12.726 8.595L18.901 3Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  if (icon === "behance") {
    return (
      <svg
        aria-hidden
        className={cn("h-4 w-4", className)}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M4 6.5H10.1C12.38 6.5 13.5 7.48 13.5 9.32C13.5 10.82 12.56 11.58 11.66 11.8V11.86C13.12 12.08 14.1 13.12 14.1 14.94C14.1 17.38 12.54 18.5 9.98 18.5H4V6.5ZM6.8 11.32H9.5C10.38 11.32 10.88 10.88 10.88 10.04C10.88 9.16 10.38 8.74 9.5 8.74H6.8V11.32ZM6.8 16.26H9.76C10.8 16.26 11.32 15.78 11.32 14.76C11.32 13.76 10.8 13.28 9.76 13.28H6.8V16.26ZM15.72 9.38H20.46V10.66H15.72V9.38ZM20.68 14.78H16.88C17.02 15.92 17.76 16.48 18.82 16.48C19.54 16.48 20.12 16.16 20.42 15.58H23.08C22.56 17.48 20.92 18.76 18.76 18.76C15.84 18.76 14 16.92 14 13.88C14 10.92 15.88 9.02 18.72 9.02C21.62 9.02 23.38 10.92 23.38 13.7C23.38 14.08 23.34 14.42 23.28 14.78H20.68ZM16.92 13.14H20.74C20.58 12.02 19.92 11.34 18.82 11.34C17.78 11.34 17.06 11.98 16.92 13.14Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  if (icon === "linkedin") {
    return <Linkedin aria-hidden className={cn("h-4 w-4", className)} strokeWidth={1.75} />
  }

  if (icon === "instagram") {
    return <Instagram aria-hidden className={cn("h-4 w-4", className)} strokeWidth={1.75} />
  }

  if (icon === "github") {
    return <Github aria-hidden className={cn("h-4 w-4", className)} strokeWidth={1.75} />
  }

  if (icon === "youtube") {
    return <Youtube aria-hidden className={cn("h-4 w-4", className)} strokeWidth={1.75} />
  }

  if (icon === "mail") {
    return <Mail aria-hidden className={cn("h-4 w-4", className)} strokeWidth={1.75} />
  }

  return <ArrowUpRight aria-hidden className={cn("h-4 w-4", className)} strokeWidth={1.75} />
}
