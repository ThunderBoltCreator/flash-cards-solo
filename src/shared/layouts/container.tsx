import type { ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './layout.module.scss'

export const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={clsx(s.container, className)}>{children}</div>
}
