import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { clsx } from 'clsx'
import { useLoginMutation } from 'entities/session/api/session-api'
import { errorHandler } from 'shared/lib/error-handling/error-handler'
import { Button } from 'shared/ui/button'
import { Card } from 'shared/ui/card/card'
import { Checkboxes } from 'shared/ui/checkbox'
import { PasswordFields, TextFields } from 'shared/ui/text-field'
import { Typography } from 'shared/ui/typography'

import s from './sign-in.module.scss'

type FieldsValues = {
  email: string
  password: string
  rememberMe: boolean
}

export function SignIn() {
  const [login] = useLoginMutation()
  const { control, handleSubmit, register } = useForm<FieldsValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })
  const navigate = useNavigate()

  const onSubmit = async (data: FieldsValues) => {
    try {
      await login(data).unwrap()
      // console.log('ya tut')
      navigate('/profile')
    } catch (e: any) {
      errorHandler(e)
    }
  }

  return (
    <Card as={'form'} className={clsx(s.signIn)} onSubmit={handleSubmit(onSubmit)}>
      <Typography className={s.title} variant={'h1'}>
        Sign In
      </Typography>
      <TextFields.controlled
        className={s.field}
        control={control}
        label={'Email'}
        name={'email'}
        type={'email'}
      />
      <PasswordFields.base {...register('password')} className={s.field} label={'Password'} />
      <Checkboxes.controlled
        className={s.checkbox}
        control={control}
        label={'Remember me'}
        name={'rememberMe'}
      />
      <Typography className={s.forgot} variant={'link1'}>
        Forgot Password?
      </Typography>
      <Button className={s.buttonSubmit} fullWidth>
        Sign In
      </Button>
      <Typography className={s.registerLabel} variant={'body2'}>
        Don`t have an account?
      </Typography>
      <Typography variant={'link2'}>Sign Up</Typography>
    </Card>
  )
}
