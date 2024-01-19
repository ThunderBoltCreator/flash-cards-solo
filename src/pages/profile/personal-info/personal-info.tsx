import { Typography } from 'shared/ui/typography'

import s from 'pages/profile/profile.module.scss'
type PersonalInfoProps = {
  email: string
  name: string
}
export function PersonalInfo({ email, name }: PersonalInfoProps) {
  return (
    <div className={s.personalInfo}>
      <Typography as={'h2'} variant={'h1'}>
        {name}
      </Typography>
      <Typography as={'h2'} variant={'body2'}>
        {email}
      </Typography>
    </div>
  )
}
