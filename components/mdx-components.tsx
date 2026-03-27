import type { MDXComponents } from "mdx/types"

import { cn } from "@/lib/utils"

export const mdxComponents: MDXComponents = {
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mt-12 text-2xl font-bold uppercase tracking-[0.12em] text-text md:text-3xl",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn("mt-10 text-xl font-semibold uppercase tracking-[0.12em] text-text", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }) => <p className={cn("mt-5", className)} {...props} />,
  strong: ({ className, ...props }) => (
    <strong className={cn("font-semibold text-text", className)} {...props} />
  ),
  em: ({ className, ...props }) => <em className={cn("italic text-text", className)} {...props} />,
  ul: ({ className, ...props }) => (
    <ul className={cn("mt-5 list-disc space-y-2 pl-6 text-muted", className)} {...props} />
  ),
  li: ({ className, ...props }) => <li className={cn("pl-1", className)} {...props} />,
  a: ({ className, ...props }) => (
    <a className={cn("text-link text-lime", className)} rel="noreferrer" target="_blank" {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn("mt-6 border-l border-l-lime pl-4 font-medium italic text-text", className)}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "panel mt-6 overflow-x-auto p-4 font-mono text-sm leading-7 text-text",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => {
    if (className) {
      return <code className={className} {...props} />
    }

    return (
      <code
        className="rounded-[4px] border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[0.92em] text-lime"
        {...props}
      />
    )
  },
}
