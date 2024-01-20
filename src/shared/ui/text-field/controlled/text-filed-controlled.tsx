import type { FieldValues, UseControllerProps } from 'react-hook-form'
import type { TextFieldProps } from 'shared/ui/text-field/text-field'

import { useController } from 'react-hook-form'

import { TextFields } from 'shared/ui/text-field'

type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'id' | 'onChange' | 'value'>

export function ControlledTextField<T extends FieldValues>({
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

  return <TextFields.BaseField onChange={onChange} value={value} {...props} />
}
