import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { clsx } from 'clsx'
import imagePlug from 'shared/assets/image-plug.png'
import { Typography } from 'shared/ui/typography'

import s from './table.module.scss'

const Root = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <table className={clsx(s.root, className)} ref={ref} {...restProps}>
        {children}
      </table>
    )
  }
)

const Head = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <thead className={clsx(s.thead, className)} ref={ref} {...restProps}>
        {children}
      </thead>
    )
  }
)

const Body = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <tbody className={clsx(s.body, className)} ref={ref} {...restProps}>
        {children}
      </tbody>
    )
  }
)

const Row = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <tr className={clsx(s.row, className)} ref={ref} {...restProps}>
        {children}
      </tr>
    )
  }
)

const HeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <th className={clsx(s.headCell, className)} ref={ref} {...restProps}>
        <Typography as={'span'} variant={'subtitle2'}>
          {children}
        </Typography>
      </th>
    )
  }
)

type TableCell = { cover?: null | string } & ComponentPropsWithoutRef<'td'>
const Cell = forwardRef<ElementRef<'td'>, TableCell>(
  ({ children, className, cover, ...restProps }, ref) => {
    return (
      <td className={clsx(s.cell, className)} ref={ref} {...restProps}>
        {cover === null ? (
          <div>
            <img alt={'Image Plug'} src={imagePlug} />
          </div>
        ) : (
          cover && (
            <div>
              <img alt={'Deck Cover'} src={cover} />
            </div>
          )
        )}
        <Typography as={'span'} variant={'body2'}>
          {children}
        </Typography>
      </td>
    )
  }
)

export const Table = { Body, Cell, Head, HeadCell, Root, Row }
