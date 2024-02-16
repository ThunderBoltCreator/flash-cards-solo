import type { ChangeEvent } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { zodResolver } from '@hookform/resolvers/zod'
import { useUpdateUserMutation } from 'entities/user/api/user-api'
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
}

const nicknameSchema = z.object({
  name: z.string().max(10).min(3),
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

type Fields = { name: string }
export function EditProfileForm({ formData, onClose }: EditProfileFormProps) {
  const [update] = useUpdateUserMutation()

  const [img, setImg] = useState<File | null | string>(null)
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Fields>({
    mode: 'onChange',
    resolver: zodResolver(nicknameSchema),
  })

  const isValidAvatar = img instanceof File

  const onSubmit = async (data: Fields) => {
    const formData = new FormData()

    formData.append('name', data.name)
    if (isValidAvatar) {
      formData.append('avatar', img)
    }

    update(formData)
      .unwrap()
      .then(() => onClose())
  }
  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const ava = e.target.files?.[0]

      if (ava) {
        imageSchema?.parse(ava)
        setImg(ava)
      }
    } catch (e) {
      const error = e as ZodError

      toast.error(error.errors[0].message)
    }
  }

  return (
    <form className={s.root} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.avatarWrapper}>
        <Avatar size={96} src={isValidAvatar ? URL.createObjectURL(img) : formData.avatar} />
        <ImageUploader
          className={s.imageUploader}
          onChange={onChangeImage}
          trigger={
            <Button as={'span'} className={s.editIcon} icon={<EditIcon />} variant={'secondary'} />
          }
        />
      </div>

      <TextFields.base
        {...register('name')}
        className={s.nickname}
        defaultValue={formData.name}
        errorMessage={errors.name?.message}
        label={'Nickname'}
        name={'name'}
      />
      <div className={s.buttonsBlock}>
        <Button icon={<ArrowBack />} onClick={onClose} type={'button'} variant={'secondary'} />
        <Button fullWidth type={'submit'}>
          Save Changes
        </Button>
      </div>
    </form>
  )
}
