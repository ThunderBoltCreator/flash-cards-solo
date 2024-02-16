import type { ComponentPropsWithoutRef, KeyboardEvent, ReactNode } from 'react'
import { useEffect, useState } from 'react'

import * as Sl from '@radix-ui/react-slider'
import { clsx } from 'clsx'
import { isValidInputValue } from 'shared/lib/reg-exp/isValidInputValue'
import { TextFields } from 'shared/ui/text-field'
import { Typography } from 'shared/ui/typography'

import s from './slider.module.scss'

export function Slider({
  className,
  defaultValue,
  disabled,
  label,
  max = 61,
  min = 0,
  onValueChange,
  onValueCommit,
  step,
  value,
  ...props
}: ComponentPropsWithoutRef<typeof Sl.Root> & { label?: ReactNode }) {
  const [inputValues, setInputValues] = useState<(number | string)[]>(value ?? [min, max])

  useEffect(() => {
    if (value) {
      if (inputValues[0] !== value?.[0] || inputValues[1] !== value?.[1]) {
        setInputValues(value)
      }
    }
  }, [value])

  const styles = {
    container: clsx(s.container, className),
    range: clsx(s.range),
    score: clsx(s.score, disabled && s.disabled),
    slider: clsx(s.slider),
    thumb: clsx(s.thumb, disabled && s.disabled),
    track: clsx(s.track),
  }

  const onInputChange = (index: number, newInputValue: string) => {
    if (isValidInputValue(/^-?(0(\.\d{0,3})?|[1-9]\d*(\.\d{0,3})?)?$/, newInputValue)) {
      const updatedInputValues = [...inputValues]

      updatedInputValues[index] = newInputValue
      setInputValues(updatedInputValues)
    }
  }

  const applyUpdateInput = () => {
    let minInputValue = +inputValues[0]
    let maxInputValue = +inputValues[1]

    if (+minInputValue < min) {
      minInputValue = min
    }
    if (+minInputValue > max) {
      minInputValue = max
    }
    if (+maxInputValue > max) {
      maxInputValue = max
    }
    if (+maxInputValue < min) {
      maxInputValue = min
    }

    const newValuesSort = [minInputValue, maxInputValue].sort((a, b) => a - b)

    setInputValues(newValuesSort)
    onValueChange?.(newValuesSort)
    onValueCommit?.(newValuesSort)
  }

  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur()
      applyUpdateInput()
    }
  }

  const onBlur = () => {
    applyUpdateInput()
  }

  const onSliderChange = (value: number[]) => {
    console.log('slider value changed', value)
    setInputValues(value)
    onValueChange?.(value)
  }

  return (
    <div className={s.root}>
      <Typography variant={'body2'}>{label}</Typography>
      <div className={styles.container}>
        <TextFields.base
          className={styles.score}
          disabled={disabled}
          onBlur={onBlur}
          onChange={e => onInputChange(0, e.currentTarget.value)}
          onKeyDown={onPressEnter}
          value={inputValues[0]}
        />
        <Sl.Root
          className={styles.slider}
          disabled={disabled}
          max={max}
          min={min}
          onValueChange={onSliderChange}
          onValueCommit={onValueCommit}
          step={step || 1}
          value={value}
          {...props}
        >
          <Sl.Track className={styles.track}>
            <Sl.Range className={styles.range} />
          </Sl.Track>
          <Sl.Thumb className={styles.thumb} />
          <Sl.Thumb className={styles.thumb} />
        </Sl.Root>
        <TextFields.base
          className={styles.score}
          disabled={disabled}
          onBlur={onBlur}
          onChange={e => onInputChange(1, e.currentTarget.value)}
          onKeyDown={onPressEnter}
          value={inputValues[1]}
        />
      </div>
    </div>
  )
}
