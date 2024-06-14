export const h3 = `import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface H3Props extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

export function H3({ children, className }: H3Props) {
  const classes = twMerge(
    'scroll-m-20 text-2xl font-semibold tracking-tight',
    className,
  )

  return <h3 className={classes}>{children}</h3>
}
`
