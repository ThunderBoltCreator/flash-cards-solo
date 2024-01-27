import type { FieldValues, UseControllerProps } from 'react-hook-form'

import type { ComponentPropsWithoutRef } from 'react'
import { useController } from 'react-hook-form'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'
import CheckboxIcon from 'shared/ui/checkbox/CheckboxIcon'
import { Typography } from 'shared/ui/typography'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  label?: string
  onChange?: (checked: boolean) => void
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

function Checkbox({
  checked = false,
  className,
  disabled,
  label,
  onChange,
  value,
  ...props
}: CheckboxProps) {
  const styles = {
    checkbox: s.checkbox,
    frame: s.frame,
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
    root: clsx(s.root, className),
  }

  return (
    <LabelRadix.Root asChild className={styles.root}>
      <Typography as={'label'} className={styles.label} variant={'body2'}>
        <CheckboxRadix.Root
          checked={checked}
          className={styles.checkbox}
          defaultChecked={false}
          disabled={disabled}
          value={value}
          {...props}
        >
          <div className={styles.frame} />
          {checked && (
            <CheckboxRadix.Indicator className={styles.indicator}>
              <CheckboxIcon />
            </CheckboxRadix.Indicator>
          )}
        </CheckboxRadix.Root>
        {label}
      </Typography>
    </LabelRadix.Root>
  )
}

export type ControlledCheckboxProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<CheckboxProps, 'id' | 'onChange' | 'value'>

function ControlledCheckbox<TFieldsValues extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...props
}: ControlledCheckboxProps<TFieldsValues>) {
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return <Checkbox checked={value} id={name} onCheckedChange={onChange} {...props} />
}

export const Checkboxes = {
  base: Checkbox,
  controlled: ControlledCheckbox,
}
