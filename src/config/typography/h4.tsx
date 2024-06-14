export const h4 = `import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface H4Props extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

export function H4({ children, className }: H4Props) {
  const classes = twMerge(
    'scroll-m-20 text-xl font-semibold tracking-tight',
    className,
  )

  return <h4 className={classes}>{children}</h4>
}
`
