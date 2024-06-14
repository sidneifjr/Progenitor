export const paragraph = `import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export function Paragraph({ children, className }: ParagraphProps) {
  const classes = twMerge(
    'text-base tracking-tight text-muted-foreground',
    className,
  )

  return <p className={classes}>{children}</p>
}
`
