import type { ComponentPropsWithoutRef } from 'react'

import * as RadixSelect from '@radix-ui/react-select'
import { clsx } from 'clsx'
import ChevronDownIcon from 'shared/assets/icons/chervon-down-icon'
import { Typography } from 'shared/ui/typography'

import s from './select.module.scss'

type Option = {
  title: string
  value: string
}

type SelectProps = {
  className?: string
  options: Option[]
  pagination?: boolean
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>

export function Select({ className, options, pagination = false, ...props }: SelectProps) {
  const itemTextVariant = pagination ? 'body2' : 'body1'

  const styles = {
    content: clsx(s.content),
    item: clsx(s.item),
    trigger: clsx(s.trigger, pagination && s.pagination),
    triggerIcon: clsx(s.triggerIcon),
  }

  return (
    <RadixSelect.Root {...props} defaultValue={options[0].value}>
      <RadixSelect.Trigger className={styles.trigger}>
        <RadixSelect.Value />
        <RadixSelect.Icon className={styles.triggerIcon}>
          <ChevronDownIcon fill={'#fff'} />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className={styles.content} position={'popper'} sideOffset={-1}>
          <RadixSelect.Viewport>
            {options.map(option => (
              <RadixSelect.SelectItem
                className={styles.item}
                key={option.value}
                value={option.value}
              >
                <RadixSelect.ItemText>
                  <Typography variant={itemTextVariant}>{option.title}</Typography>
                </RadixSelect.ItemText>
              </RadixSelect.SelectItem>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}
