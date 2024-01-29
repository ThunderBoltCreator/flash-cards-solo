import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { clsx } from 'clsx'
import { useLoginMutation } from 'entities/session/api/session-api'
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
  const [login, { isLoading }] = useLoginMutation()
  const { control, handleSubmit } = useForm<FieldsValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })
  const navigate = useNavigate()

  const onSubmit = (data: FieldsValues) => {
    login(data)
      .unwrap()
      .then(() => navigate('/profile'))
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
      <PasswordFields.controlled
        className={s.field}
        control={control}
        label={'Password'}
        name={'password'}
      />
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
  // return (
  //   <Card className={clsx(s.signIn)}>
  //     <Typography className={s.title} variant={'h1'}>
  //       Sign In
  //     </Typography>
  //     <form className={s.form}>
  //       <div className={s.formBody}>
  //         <div className={s.fields}>
  //           <TextFields.controlled
  //             className={s.field}
  //             control={control}
  //             label={'Email'}
  //             name={'email'}
  //             type={'email'}
  //           />
  //           <PasswordFields.controlled
  //             className={s.field}
  //             control={control}
  //             label={'Password'}
  //             name={'password'}
  //           />
  //         </div>
  //         <Checkboxes.controlled
  //           className={s.checkbox}
  //           control={control}
  //           label={'Remember me'}
  //           name={'rememberMe'}
  //         />
  //         <div className={s.forgot}>
  //           <a>Forgot Password?</a>
  //         </div>
  //       </div>
  //       <Button className={s.buttonSubmit} fullWidth>
  //         Sign In
  //       </Button>
  //     </form>
  //     <Typography className={s.registerLabel} variant={'body2'}>
  //       Don't have an account?
  //     </Typography>
  //     <Typography variant={'link2'}>Sign Up</Typography>
  //   </Card>
  // )
}
