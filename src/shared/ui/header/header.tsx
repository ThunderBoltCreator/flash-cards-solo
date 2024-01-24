import type { ReactNode } from 'react'

import { clsx } from 'clsx'
import Logo from 'shared/Logo'

import s from './header.module.scss'

type HeaderProps = {
  className?: string
  rightSlot: ReactNode | null
}

export function Header({ className, rightSlot }: HeaderProps) {
  const styles = clsx(s.root, className)

  return (
    <header className={styles}>
      <Logo />
      {rightSlot}
    </header>
  )
}
