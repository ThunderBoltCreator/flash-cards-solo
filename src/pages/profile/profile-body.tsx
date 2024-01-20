import type { ProfileData } from 'pages/profile/profile'

import { PersonalInfo } from 'pages/profile/personal-info/personal-info'
import EditIcon from 'shared/assets/icons/edit-icon'
import { Avatar } from 'shared/ui/avatar'
import { Button } from 'shared/ui/button'

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
      <PersonalInfo email={data.email} name={data.name} />
    </>
  )
}
