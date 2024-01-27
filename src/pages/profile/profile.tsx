import type { UserData } from 'pages/profile/types'

import { useState } from 'react'

import { clsx } from 'clsx'
import { useLogoutMutation } from 'entities/session'
import { EditProfileForm } from 'pages/profile/edit-profile/edit-profile-form'
import { ProfileBody } from 'pages/profile/profile-body'
import LogoutIcon from 'shared/assets/icons/log-out'
import { Button } from 'shared/ui/button'
import { Card } from 'shared/ui/card/card'
import { Typography } from 'shared/ui/typography'

import s from './profile.module.scss'
type ProfileProps = {}
export type ProfileData = Omit<UserData, 'created' | 'updated'>
export function Profile({}: ProfileProps) {
  const [editMode, setEditMode] = useState(false)
  const [logout, { data, status }] = useLogoutMutation()
  const [mockData, setData] = useState<ProfileData>({
    avatar:
      'https://s3-alpha-sig.figma.com/img/9846/73b3/30142bfde5bdcdb7549cf75f7a51d100?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZILpX7zbQEalOTF2I8S4L4oLOdTvTvP3XxFpPevmvMa97l5R9RGJA3KsG1O7mYYsr76PrZmUe6ws-6oKe-kZV29cjZkc~4~ZTRpeP6OlgGIVNuB5kZjvVK5QWAMxBXm~hfwFmDrAie7pqq3BCqfsaTdZldj29NQ62dvm4lpo2XkrML7XbkRTU8PEPkjoKRciSjQfv4m-vEhXeac7VW-Qz4fB3bAT5Va-ldJX3Mm36jx6n4pnIihvT~KY5nerQZmLgJCKf-qEZQaPslgCMLv8eOJk4DHxEl09UuTdFoZt2GpNqLwP3n1qPlqeeIhG7ONF~RP~ptvjYEdkcKCHz5~WlQ__',
    email: 'ahahah@haha.hah',
    id: crypto.randomUUID(),
    isEmailVerified: true,
    name: 'Ivan',
  })

  console.log('data:', data)
  console.log('status:', status)

  const changeData = <T extends Partial<ProfileData>>(newData: T) => {
    setData({ ...mockData, ...newData })
  }

  const logoutHandler = () => {
    logout()
  }

  return (
    <Card className={clsx(s.card, s.container)}>
      <div className={s.content}>
        <Typography className={s.title} variant={'large'}>
          {`Profile ${editMode ? 'edit' : ''}`}
        </Typography>

        {editMode ? (
          <EditProfileForm
            formData={{ avatar: mockData.avatar, name: mockData.name }}
            onClose={() => setEditMode(false)}
            onDataChange={changeData}
          />
        ) : (
          <>
            <ProfileBody data={mockData} setEditMode={setEditMode} />
            <Button icon={<LogoutIcon />} onClick={logoutHandler} variant={'secondary'}>
              <Typography variant={'subtitle2'}>Logout</Typography>
            </Button>
          </>
        )}
      </div>
    </Card>
  )
}
