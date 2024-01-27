import { Link, Outlet } from 'react-router-dom'
import { Flip, ToastContainer } from 'react-toastify'

import { Layout } from 'shared/layouts/layout'
import { Avatar } from 'shared/ui/avatar'
import { Header } from 'shared/ui/header/header'

export function App() {
  return (
    <Layout
      className={'stand'}
      header={
        <Header
          rightSlot={
            <Link to={'/profile'}>
              <Avatar
                alt={'Jerry'}
                src={
                  'https://cdn.dribbble.com/users/536736/screenshots/2443094/media/ec35f1e2d8943cd0e0d9b6674a626894.png'
                }
              />
            </Link>
          }
        />
      }
      page={<Outlet />}
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
