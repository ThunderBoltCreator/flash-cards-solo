import type { FieldValues, UseControllerProps } from 'react-hook-form'

import type { ComponentPropsWithoutRef, ReactElement } from 'react'
import { forwardRef, useId } from 'react'
import { useController } from 'react-hook-form'

import { clsx } from 'clsx'
import { IconWrapper } from 'shared/ui/icon-wrapper'
import { Typography } from 'shared/ui/typography'

import s from './text-field.module.scss'

export type TextFieldProps = {
  errorMessage?: string
  label?: string
  leftIcon?: ReactElement | null
  rightIcon?: ReactElement | null
} & ComponentPropsWithoutRef<'input'>

const BaseField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { className, disabled, errorMessage, id, label, leftIcon, placeholder, rightIcon, ...props },
    ref
  ) => {
    const myId = useId()

    const styles = {
      errorMessage: clsx(s.errorMessage),
      input: clsx(s.input, errorMessage && s.error),
      inputWrapper: clsx(s.wrapper),
      leftIcon: clsx(s.icon, s.leftIcon, errorMessage && s.error),
      rightIcon: clsx(s.icon, s.rightIcon, errorMessage && s.error),
      root: clsx(s.root),
      title: clsx(s.title),
    }

    return (
      <div className={clsx(styles.root, className)}>
        {label && (
          <Typography as={'label'} className={styles.title} htmlFor={id || myId} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            disabled={disabled}
            id={id || myId}
            placeholder={errorMessage ? errorMessage : placeholder}
            ref={ref}
            {...props}
          />
          {leftIcon && <IconWrapper className={styles.leftIcon}>{leftIcon}</IconWrapper>}
          {rightIcon && <IconWrapper className={styles.rightIcon}>{rightIcon}</IconWrapper>}
        </div>
        {errorMessage && (
          <Typography className={styles.errorMessage} variant={'error'}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)

type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'id' | 'onChange' | 'value'>

function ControlledTextField<T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...props
}: ControlledTextFieldProps<T>) {
  const {
    field: { onChange, value },
  } = useController({ control, defaultValue, name, rules, shouldUnregister })

  return <BaseField onChange={onChange} value={value} {...props} />
}

export const TextFields = {
  base: BaseField,
  controlled: ControlledTextField,
}
