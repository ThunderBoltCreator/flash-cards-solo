import { Link, Outlet } from 'react-router-dom'
import { Flip, ToastContainer } from 'react-toastify'

import { useAppSelector } from 'app/store/hooks'
import { selectIsAuth } from 'entities/session'
import { useMeQuery } from 'entities/user/api/user-api'
import { Layout } from 'shared/layouts/layout'
import { Avatar } from 'shared/ui/avatar'
import { Button } from 'shared/ui/button'
import { Header } from 'shared/ui/header/header'

export function App() {
  const { data: user, isError, isLoading } = useMeQuery()

  const isAuth = useAppSelector(selectIsAuth)

  console.log(isAuth)
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Layout
      className={'stand'}
      header={
        <Header
          rightSlot={
            isAuth ? (
              <Link to={'/profile'}>
                <Avatar alt={user?.name} src={user?.avatar} />
              </Link>
            ) : (
              <Button as={Link} to={'/login'} variant={'secondary'}>
                Sign In
              </Button>
            )
          }
        />
      }
      page={<Outlet context={{ isAuth } satisfies { isAuth: boolean }} />}
    >
      <ToastContainer
        autoClose={3000}
        closeOnClick
        newestOnTop
        position={'bottom-left'}
        theme={'dark'}
        transition={Flip}
      />
    </Layout>
  )
}
