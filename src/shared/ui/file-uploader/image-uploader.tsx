import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react'
import { forwardRef } from 'react'

import s from './file-uploader.module.scss'
type ImageUploaderProps = {
  trigger?: ReactNode
} & ComponentPropsWithoutRef<'input'>

export const ImageUploader = forwardRef<ElementRef<'input'>, ImageUploaderProps>(
  ({ className, trigger, ...props }, ref) => {
    return (
      <label className={className}>
        <input accept={'image/*'} className={s.input} ref={ref} type={'file'} {...props} />
        {trigger}
      </label>
    )
  }
)
