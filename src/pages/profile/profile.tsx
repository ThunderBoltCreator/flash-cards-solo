import type { UserData } from 'pages/profile/types'

import { useState } from 'react'

import { clsx } from 'clsx'
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
  const [editMode, setEditMode] = useState(true)
  const [data, setData] = useState<ProfileData>({
    avatar:
      'https://s3-alpha-sig.figma.com/img/9846/73b3/30142bfde5bdcdb7549cf75f7a51d100?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hRwTCI4saUNHfZDp1kwf9KzQ7DtFNPOZ0Be5PH5Tp-syPPq6D1wdWn-lB0b5rUM-BifBL5bmEhNXBmVn4O7FuAGbFyT32SieCHiB9254vsS4QqBRVV0Xsy8NaFdBtNz5qRVOZVubd3lydRodfDwPpbLTP2OPPwDgfsT4TYcZJ~UX8DUnfUr8zvcWb5eDhC~q~8tNvvdUYarA-VCu2VbgKr2meS2lm3j5TKxXONUejpu730Q8j-kH-Xs2qgUcglv3uKUVArmMF3xgdip0AwfyeEDLE4u4N9dReUAegdZ~1J9s-M10FDTa7HuGhn6QofMBfsuHIJENMKOxxFKsmt-AqA__',
    email: 'ahahah@haha.hah',
    id: crypto.randomUUID(),
    isEmailVerified: true,
    name: 'Ivan',
  })

  const changeData = <T extends Partial<ProfileData>>(newData: T) => {
    setData({ ...data, ...newData })
  }

  return (
    <Card className={clsx(s.card, s.container)}>
      <div className={s.content}>
        <Typography className={s.title} variant={'large'}>
          {`Profile ${editMode ? 'edit' : ''}`}
        </Typography>

        {editMode ? (
          <EditProfileForm
            formData={{ avatar: data.avatar, name: data.name }}
            onClose={() => setEditMode(false)}
            onDataChange={changeData}
          />
        ) : (
          <>
            <ProfileBody data={data} setEditMode={setEditMode} />
            <Button icon={<LogoutIcon />} variant={'secondary'}>
              <Typography variant={'subtitle2'}>Logout</Typography>
            </Button>
          </>
        )}
      </div>
    </Card>
  )
}
