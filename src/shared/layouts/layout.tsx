import type { ReactNode } from 'react'

type LayoutProps = {
  children?: ReactNode
  className?: string
  header?: ReactNode
  page?: ReactNode
}

export function Layout({ children, className, header, page }: LayoutProps) {
  return (
    <div className={className}>
      {header}
      <main>{page}</main>
      {children}
    </div>
  )
}
