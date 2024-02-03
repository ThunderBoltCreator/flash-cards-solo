import type { DropdownMenuSeparatorProps } from '@radix-ui/react-dropdown-menu'

import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react'
import { forwardRef } from 'react'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown-menu.module.scss'

type DropdownMenuProps = {
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof RadixDropdown.Content>

const Root = forwardRef<ElementRef<typeof RadixDropdown.Content>, DropdownMenuProps>(
  ({ children, className, trigger, ...props }, ref) => {
    return (
      <RadixDropdown.Root>
        <RadixDropdown.Trigger asChild>{trigger}</RadixDropdown.Trigger>
        <RadixDropdown.Portal>
          <RadixDropdown.Content className={clsx(s.content, className)} ref={ref} {...props}>
            {children}
            <RadixDropdown.Arrow className={s.arrow} />
          </RadixDropdown.Content>
        </RadixDropdown.Portal>
      </RadixDropdown.Root>
    )
  }
)

type MenuItem = {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
} & ComponentPropsWithoutRef<typeof RadixDropdown.Item>
const Item = ({ children, className, leftIcon, rightIcon, ...props }: MenuItem) => {
  return (
    <RadixDropdown.Item className={clsx(s.item, className)} {...props}>
      {leftIcon}
      {children}
      {rightIcon}
    </RadixDropdown.Item>
  )
}

const Separator = ({ className, ...props }: DropdownMenuSeparatorProps) => {
  return <RadixDropdown.Separator className={clsx(s.separator, className)} {...props} />
}

export const DropdownMenu = { Item, Root, Separator }
