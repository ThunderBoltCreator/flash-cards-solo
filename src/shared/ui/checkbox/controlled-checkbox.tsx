import type { FieldValues, UseControllerProps } from 'react-hook-form'
import type { CheckboxProps } from 'shared/ui/checkbox/checkbox'

import { useController } from 'react-hook-form'

import { Checkbox } from 'shared/ui/checkbox/checkbox'

export type ControlledCheckboxProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<CheckboxProps, 'id' | 'onChange' | 'value'>

export function ControlledCheckbox<TFieldsValues extends FieldValues>({
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

  return <Checkbox checked={value} id={name} onChange={onChange} {...props} />
}
