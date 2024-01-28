import type { UserData } from 'pages/profile/types'

import { EditProfileForm } from 'pages/profile/edit-profile/edit-profile-form'
import EditIcon from 'shared/assets/icons/edit-icon'
import { Avatar } from 'shared/ui/avatar'
import { Button } from 'shared/ui/button'
import { Typography } from 'shared/ui/typography'
import { LogoutButton } from 'widgets/logout/ui/logout-button'

import s from 'pages/profile/profile.module.scss'
type ProfileData = Omit<UserData, 'created' | 'updated'>
type Props = {
  editMode: boolean
  setEditMode: (flag: boolean) => void
  user: ProfileData
}
export function ProfileBody({ editMode, setEditMode, user }: Props) {
  if (editMode) {
    return (
      <EditProfileForm
        formData={{ avatar: user.avatar, name: user.name }}
        onClose={() => setEditMode(false)}
      />
    )
  }

  return (
    <>
      <Button
        className={s.editButton}
        icon={<EditIcon />}
        iconPosition={'right'}
        onClick={() => setEditMode(true)}
        variant={'secondary'}
      />
      <Avatar size={96} src={user.avatar} />
      <div className={s.personalInfo}>
        <Typography as={'h2'} variant={'h1'}>
          {user.name}
        </Typography>
        <Typography as={'h2'} variant={'body2'}>
          {user.email}
        </Typography>
      </div>
      <LogoutButton />
    </>
  )
}
