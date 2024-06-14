export const lead = `import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface LeadProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export function Lead({ children, className }: LeadProps) {
  const classes = twMerge('text-xl text-muted-foreground', className)

  return <p className={classes}>{children}</p>
}
`
