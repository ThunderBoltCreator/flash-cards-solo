import CheckEmailIcon from 'shared/assets/icons/check-email-icon'
import { Button } from 'shared/ui/button'
import { Card } from 'shared/ui/card/card'
import { Typography } from 'shared/ui/typography'

import s from 'features/forgot-password/check-email/ui/check-email.module.scss'
export function CheckEmailPage() {
  return (
    <Card className={s.checkEmailCard}>
      <Typography className={s.title} variant={'large'}>
        Check Email
      </Typography>
      <CheckEmailIcon className={s.image} />
      <Typography className={s.description} variant={'body2'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button fullWidth>Back to Sign In</Button>
    </Card>
  )
}
