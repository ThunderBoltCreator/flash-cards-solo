import React, { useState } from 'react'

export const InputComponent: React.FC = () => {
  const [value, setValue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    const regex = /^\d*\.?\d{0,2}$/ // Регулярное выражение для соответствия требованиям

    if (regex.test(inputValue)) {
      // Проверка на соответствие формату
      setValue(inputValue)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Для обработки удаления цифр после точки
    console.log(event.key)
    if (event.key === 'Backspace' && value.includes('.')) {
      const decimalIndex = value.indexOf('.')

      console.log('decimalIndex', decimalIndex)
      console.log('value.length - 1', value.length - 3)
      if (decimalIndex === value.length - 3) {
        setValue(value.substring(0, value.length - 1) + '0') // Заменяем удаляемый символ на 0
      }
    }
  }

  const handleFocus = () => {
    if (!value) {
      setValue('0.00') // Появление маски при фокусировке
    }
  }

  return (
    <input
      onChange={handleChange}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      style={{ color: 'darkblue' }}
      type={'text'}
      value={value}
    />
  )
}

export default InputComponent
