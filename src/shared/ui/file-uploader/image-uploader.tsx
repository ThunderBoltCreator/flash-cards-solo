import type { ZodSchema } from 'zod'

import type { ChangeEvent, ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react'
import { forwardRef, useState } from 'react'
import { toast } from 'react-toastify'

import { Typography } from 'shared/ui/typography'
import { ZodError } from 'zod'

import s from './file-uploader.module.scss'
type ImageUploaderProps = {
  onImageChange: (image: File) => void
  trigger?: ReactNode
  validationSchema?: ZodSchema
} & ComponentPropsWithoutRef<'input'>

export const ImageUploader = forwardRef<ElementRef<'input'>, ImageUploaderProps>(
  ({ className, onImageChange, trigger, validationSchema, ...props }, ref) => {
    const [error, setError] = useState<null | string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      try {
        const ava = e.target.files?.[0]

        console.log(ava)

        if (ava) {
          setError(null)
          onImageChange(ava)
          validationSchema?.parse(ava)
        }
      } catch (e) {
        const error = e as ZodError

        setError(error.errors[0].message)
        toast(error.errors[0].message)
      }
    }

    return (
      <label className={className}>
        {trigger}
        <input
          accept={'image/*'}
          className={s.input}
          onChange={onChangeHandler}
          ref={ref}
          type={'file'}
          {...props}
        />
        <Typography className={s.error} variant={'error'}>
          {error}
        </Typography>
      </label>
    )
  }
)
