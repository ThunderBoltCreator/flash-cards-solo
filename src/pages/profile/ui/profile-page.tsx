import { useState } from 'react'

import { clsx } from 'clsx'
import { useMeQuery } from 'entities/user/api/user-api'
import { ProfileBody } from 'features/profile/ui/profile-body'
import { Card } from 'shared/ui/card/card'
import { Typography } from 'shared/ui/typography'

import s from 'pages/profile/profile.module.scss'

export function ProfilePage() {
  const { data: user } = useMeQuery()

  const [editMode, setEditMode] = useState(false)

  if (!user) {
    return null
  }

  return (
    <Card className={clsx(s.card, s.container)}>
      <div className={s.content}>
        <Typography className={s.title} variant={'large'}>
          {`Profile ${editMode ? 'edit' : ''}`}
        </Typography>

        <ProfileBody editMode={editMode} setEditMode={setEditMode} user={user} />
      </div>
    </Card>
  )
}
