import { useForm } from 'react-hook-form'

import { Button } from 'shared/ui/button'
import { Card } from 'shared/ui/card/card'
import { TextFields } from 'shared/ui/text-field'
import { Typography } from 'shared/ui/typography'

import s from './new-password-page.module.scss'

type FieldsValues = {
  password: string
}
export function NewPasswordPage() {
  const { control } = useForm<FieldsValues>()

  return (
    <Card as={'form'} className={s.newPasswordCard}>
      <Typography className={s.title} variant={'large'}>
        Create new password
      </Typography>
      <TextFields.controlled
        className={s.field}
        control={control}
        defaultValue={''}
        label={'Password'}
        name={'password'}
      />
      <Typography className={s.description} variant={'body2'}>
        Create new password and we will send you further instructions to email
      </Typography>
      <Button fullWidth>
        <Typography variant={'subtitle2'}>Create New Password</Typography>
      </Button>
    </Card>
  )
}
