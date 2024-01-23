import type { ProfileData } from 'pages/profile/profile'

import EditIcon from 'shared/assets/icons/edit-icon'
import { Avatar } from 'shared/ui/avatar'
import { Button } from 'shared/ui/button'
import { Typography } from 'shared/ui/typography'

import s from './profile.module.scss'

type Props = {
  data: ProfileData
  setEditMode: (flag: boolean) => void
}
export function ProfileBody({ data, setEditMode }: Props) {
  return (
    <>
      <Button
        className={s.editButton}
        icon={<EditIcon />}
        iconPosition={'right'}
        onClick={() => setEditMode(true)}
        variant={'secondary'}
      />
      <Avatar size={96} src={data.avatar} />
      <div className={s.personalInfo}>
        <Typography as={'h2'} variant={'h1'}>
          {data.name}
        </Typography>
        <Typography as={'h2'} variant={'body2'}>
          {data.email}
        </Typography>
      </div>
    </>
  )
}
