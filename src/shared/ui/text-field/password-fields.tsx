import type { FieldValues, UseControllerProps } from 'react-hook-form'
import type { TextFieldProps } from 'shared/ui/text-field/text-fields'

import { forwardRef, useState } from 'react'
import { useController } from 'react-hook-form'

import CloseEye from 'shared/assets/icons/close-eye'
import Eye from 'shared/assets/icons/eye'
import { TextFields } from 'shared/ui/text-field/text-fields'

type PasswordFieldProps = Omit<TextFieldProps, 'rightIcon' | 'type'> & {
  showPasswordInit?: boolean
}

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ disabled, showPasswordInit, ...props }, ref) => {
    const [showPas, setShowPas] = useState(!!showPasswordInit)
    const type = showPas ? 'text' : 'password'

    const toggleShowPas = () => {
      if (disabled) {
        return
      }

      setShowPas(!showPas)
    }

    return (
      <TextFields.base
        disabled={disabled}
        ref={ref}
        {...props}
        rightIcon={
          <button disabled={disabled} onClick={toggleShowPas} type={'button'}>
            {showPas ? <Eye /> : <CloseEye />}
          </button>
        }
        type={type}
      />
    )
  }
)

type ControlledPasswordFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<PasswordFieldProps, 'id' | 'onChange' | 'value'>

function ControlledPasswordField<T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...props
}: ControlledPasswordFieldProps<T>) {
  const {
    field: { onChange, value },
  } = useController({ control, defaultValue, name, rules, shouldUnregister })

  return <PasswordField onChange={onChange} value={value} {...props} />
}

export const PasswordFields = {
  base: PasswordField,
  controlled: ControlledPasswordField,
}
