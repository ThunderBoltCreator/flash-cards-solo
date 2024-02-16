import type { ReactNode } from 'react'

import { Container } from 'shared/layouts/container'

import s from './layout.module.scss'

type LayoutProps = {
  children?: ReactNode
  header?: ReactNode
  page?: ReactNode
}

export function Layout({ children, header, page }: LayoutProps) {
  return (
    <>
      {header}
      <main>
        <Container className={s.container}>{page}</Container>
      </main>
      {children}
    </>
  )
}
