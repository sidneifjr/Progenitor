export const small = `import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface SmallProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
}

export function Small({ children, className }: SmallProps) {
  const classes = twMerge(
    'text-sm leading-none text-muted-foreground',
    className,
  )

  return <span className={classes}>{children}</span>
}
`
