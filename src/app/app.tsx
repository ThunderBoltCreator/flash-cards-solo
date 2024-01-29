import { Outlet } from 'react-router-dom'
import { Flip, ToastContainer } from 'react-toastify'

import { useMeQuery } from 'entities/user/api/user-api'
import { Layout } from 'shared/layouts/layout'
import { AppHeader } from 'widgets/header/app-header'

export function App() {
  const { data: user, isError, isLoading } = useMeQuery()

  const isAuth = !isError

  console.log('isError', isError)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Layout
      className={'stand'}
      header={<AppHeader isAuth={isAuth} user={user} />}
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
