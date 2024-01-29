import type { User } from 'entities/user/api/types'

import { Link } from 'react-router-dom'

import { Avatar } from 'shared/ui/avatar'
import { Button } from 'shared/ui/button'
import { Header } from 'shared/ui/header'

type Props = {
  isAuth: boolean
  user?: User
}

export function AppHeader({ isAuth, user }: Props) {
  if (isAuth) {
    return (
      <Header
        rightSlot={
          <Link to={'/profile'}>
            <Avatar alt={user?.name} src={user?.avatar} />
          </Link>
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
