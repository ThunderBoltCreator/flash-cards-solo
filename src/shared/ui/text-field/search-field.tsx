import type { TextFieldProps } from 'shared/ui/text-field/text-fields'

import { useId, useState } from 'react'
import type { ChangeEvent } from 'react'

import Cross from 'shared/assets/icons/cross'
import Loup from 'shared/assets/icons/loup'
import { TextFields } from 'shared/ui/text-field/text-fields'
export type SearchFieldProps = {
  onButtonClick?: () => void
} & Omit<TextFieldProps, 'leftIcon' | 'rightIcon' | 'type'> & {}

export function SearchField({ onButtonClick, ...props }: SearchFieldProps) {
  const id = useId()
  const [value, setValue] = useState('')

  const onChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const SearchIconLabel = (
    <label htmlFor={id}>
      <Loup />
    </label>
  )

  const SearchIconButton = (
    <button onClick={onButtonClick}>
      <Loup />
    </button>
  )

  const ClearInputIcon = (
    <button onClick={() => setValue('')}>
      <Cross />
    </button>
  )

  return (
    <TextFields.base
      id={id}
      leftIcon={value ? SearchIconButton : SearchIconLabel}
      onChange={onChangeField}
      rightIcon={value ? ClearInputIcon : null}
      type={'search'}
      value={value}
      {...props}
    />
  )
}
