import type { ProfileData } from 'pages/profile/profile'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import ArrowBack from 'shared/assets/icons/arrow-back'
import EditIcon from 'shared/assets/icons/edit-icon'
import { Avatar } from 'shared/ui/avatar'
import { Button } from 'shared/ui/button'
import { ImageUploader } from 'shared/ui/file-uploader/image-uploader'
import { ControlledTextField } from 'shared/ui/text-field/controlled/text-filed-controlled'

import s from './edit-profile-form.module.scss'
type EditProfileFormProps = {
  changeData: <T extends Partial<ProfileData>>(newData: T) => void
  data: {
    avatar: string
    name: string
  }
  onClose: () => void
}

type FormState = {
  image: FileList
  name: string
}

export function EditProfileForm({ changeData, data, onClose }: EditProfileFormProps) {
  const [img, setImg] = useState('')
  const { control, handleSubmit, register, watch } = useForm<FormState>()

  const onSubmit = (data: FormState) => {
    console.log(data)
    changeData({ avatar: img, name: data.name })

    onClose()
  }

  const ava = watch('image')

  useEffect(() => {
    if (ava && ava.length > 0) {
      setImg(URL.createObjectURL(ava[0]))
    }
  }, [ava])

  return (
    <>
      <form className={s.root} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.avatarWrapper}>
          <Avatar size={96} src={img || data.avatar} />
          <ImageUploader
            {...register('image')}
            className={s.editIconWrapper}
            trigger={
              <Button
                as={'span'}
                className={s.editIcon}
                icon={<EditIcon />}
                variant={'secondary'}
              />
            }
          />
        </div>
        <ControlledTextField
          control={control}
          defaultValue={data.name}
          label={'Nickname'}
          name={'name'}
        />

        <div className={s.buttonsBlock}>
          <Button icon={<ArrowBack />} onClick={onClose} type={'button'} variant={'secondary'} />
          <Button fullWidth>Save Changes</Button>
        </div>
      </form>
    </>
  )
}
