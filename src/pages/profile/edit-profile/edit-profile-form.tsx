import type { ProfileData } from 'pages/profile/profile'

import { useState } from 'react'
import type { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { zodResolver } from '@hookform/resolvers/zod'
import ArrowBack from 'shared/assets/icons/arrow-back'
import EditIcon from 'shared/assets/icons/edit-icon'
import { ACCEPTED_IMAGES_FORMATS, IMAGE_MAX_SIZE } from 'shared/const'
import { Avatar } from 'shared/ui/avatar'
import { Button } from 'shared/ui/button'
import { ImageUploader } from 'shared/ui/image-uploader/image-uploader'
import { TextFields } from 'shared/ui/text-field'
import { ZodError, z } from 'zod'

import s from './edit-profile-form.module.scss'
type EditProfileFormProps = {
  formData: {
    avatar: string
    name: string
  }
  onClose: () => void
  onDataChange: <T extends Partial<ProfileData>>(newData: T) => void
}

type FormState = {
  name: string
}

const editProfileSchema = z.object({
  name: z.string().max(10),
})

const imageSchema = z
  .instanceof(File)
  .refine(
    file => file.size <= IMAGE_MAX_SIZE,
    `Max image size is 1MB. The file will not be uploaded.`
  )
  .refine(
    file => ACCEPTED_IMAGES_FORMATS.includes(file.type),
    'Only .jpg, .jpeg, .png, .svg and .webp formats are supported. The file will not be uploaded.'
  )

export function EditProfileForm({ formData, onClose, onDataChange }: EditProfileFormProps) {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormState>({
    resolver: zodResolver(editProfileSchema),
  })
  const [newImg, setNewImg] = useState(formData.avatar)

  const onSubmit = (data: FormState) => {
    onDataChange({ avatar: newImg, name: data.name })
    onClose()
  }

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const ava = e.target.files?.[0]

      if (ava) {
        setNewImg(URL.createObjectURL(ava))
        imageSchema?.parse(ava)
      }
    } catch (e) {
      const error = e as ZodError

      toast(error.errors[0].message)
    }
  }

  return (
    <form className={s.root} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.avatarWrapper}>
        <Avatar size={96} src={newImg} />
        <ImageUploader
          className={s.imageUploader}
          onChange={onChangeImage}
          trigger={
            <Button as={'span'} className={s.editIcon} icon={<EditIcon />} variant={'secondary'} />
          }
        />
      </div>
      <TextFields.controlled
        className={s.nickname}
        control={control}
        defaultValue={formData.name}
        errorMessage={errors.name?.message}
        label={'Nickname'}
        name={'name'}
      />

      <div className={s.buttonsBlock}>
        <Button icon={<ArrowBack />} onClick={onClose} type={'button'} variant={'secondary'} />
        <Button fullWidth>Save Changes</Button>
      </div>
    </form>
  )
}
