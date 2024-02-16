import type { User } from 'entities/user/api/types'

import { Link, useNavigate } from 'react-router-dom'

import LogoutIcon from 'shared/assets/icons/logout-icon'
import ProfileIcon from 'shared/assets/icons/profile-icon'
import { Avatar } from 'shared/ui/avatar'
import { Button } from 'shared/ui/button'
import { DropdownMenu } from 'shared/ui/dropdown'
import { Header } from 'shared/ui/header'
import { Typography } from 'shared/ui/typography'

import s from './app-header.module.scss'

type Props = {
  isAuth: boolean
  user?: User
}

export function AppHeader({ isAuth, user }: Props) {
  const navigate = useNavigate()

  if (isAuth) {
    return (
      <Header
        rightSlot={
          <div className={s.userMenu}>
            <Typography as={Link} className={s.rootLink} to={'/profile'} variant={'subtitle1'}>
              {user?.name}
            </Typography>
            <DropdownMenu.Root
              align={'end'}
              className={s.content}
              sideOffset={10}
              trigger={
                <div>
                  <Avatar alt={user?.name} className={s.trigger} size={48} src={user?.avatar} />
                </div>
              }
            >
              <DropdownMenu.Item>
                <div className={s.user}>
                  <Avatar alt={user?.name} size={36} src={user?.avatar} />
                  <div>
                    <Typography variant={'subtitle2'}>{user?.name}</Typography>
                    <Typography variant={'caption'}>{user?.email}</Typography>
                  </div>
                </div>
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item
                className={s.link}
                leftIcon={<ProfileIcon />}
                onSelect={() => navigate('/profile')}
              >
                <Typography variant={'caption'}>My Profile</Typography>
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item
                className={s.link}
                leftIcon={<LogoutIcon />}
                onSelect={() => navigate('/login')}
              >
                <Typography variant={'caption'}>Sign Out</Typography>
              </DropdownMenu.Item>
            </DropdownMenu.Root>
          </div>
        }
      />
    )
  }

  return (
    <Header
      rightSlot={
        <Button as={Link} to={'/login'} variant={'secondary'}>
          Sign In
        </Button>
      }
    />
  )
}
