import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import Logo from 'shared/Logo'
import { Container } from 'shared/layouts/container'

import s from './header.module.scss'

type HeaderProps = {
  className?: string
  rightSlot: ReactNode | null
}

export function Header({ rightSlot }: HeaderProps) {
  return (
    <header className={s.header}>
      <Container className={s.root}>
        <Link to={'/'}>
          <Logo />
        </Link>
        {rightSlot}
      </Container>
    </header>
  )
}
