import { useForm } from 'react-hook-form'

import { clsx } from 'clsx'
import { Button } from 'shared/ui/button'
import { Card } from 'shared/ui/card/card'
import { TextFields } from 'shared/ui/text-field'
import { Typography } from 'shared/ui/typography'

import s from './forgot-password.module.scss'
type FieldsValues = {
  email: string
}

export function ForgotPassword() {
  const { control } = useForm<FieldsValues>()

  return (
    <Card as={'form'} className={clsx(s.forgotCard)}>
      <Typography className={s.title} variant={'h1'}>
        Forgot Password
      </Typography>
      <TextFields.controlled
        className={s.field}
        control={control}
        defaultValue={''}
        label={'Email'}
        name={'email'}
        type={'email'}
      />
      <Typography className={s.description} variant={'body2'}>
        Enter your email address and we will send you further instructions
      </Typography>
      <Button className={s.buttonSubmit} fullWidth>
        Send Instructions
      </Button>
      <Typography className={s.registerLabel} variant={'body2'}>
        Did you remember your password?
      </Typography>
      <Typography className={s.link} variant={'link1'}>
        Try logging in
      </Typography>
    </Card>
  )
}
