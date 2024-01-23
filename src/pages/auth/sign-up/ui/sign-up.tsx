import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { clsx } from 'clsx'
import { Button } from 'shared/ui/button'
import { Card } from 'shared/ui/card/card'
import { PasswordFields, TextFields } from 'shared/ui/text-field'
import { Typography } from 'shared/ui/typography'

import s from './sign-up.module.scss'
type FieldsValues = {
  confirmPassword: string
  email: string
  password: string
  rememberMe: boolean
}

export function SignUp() {
  const { control } = useForm<FieldsValues>()

  return (
    <Card as={'form'} className={clsx(s.signUp)}>
      <Typography className={s.title} variant={'h1'}>
        Sign Up
      </Typography>
      <div className={s.fields}>
        <TextFields.controlled
          className={s.field}
          control={control}
          label={'Email'}
          name={'email'}
          type={'email'}
        />
        <PasswordFields.controlled
          className={s.field}
          control={control}
          label={'Password'}
          name={'password'}
        />
        <PasswordFields.controlled
          className={s.field}
          control={control}
          label={'Confirm Password'}
          name={'confirmPassword'}
        />
      </div>
      <Button className={s.buttonSubmit} fullWidth>
        Sign Up
      </Button>
      <Typography className={s.linkLoginLabel} variant={'body2'}>
        Already have an account?
      </Typography>
      <Typography variant={'link2'}>Sign In</Typography>
    </Card>
  )
}
