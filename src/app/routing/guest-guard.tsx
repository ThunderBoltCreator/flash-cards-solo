import { Navigate, Outlet, useOutletContext } from 'react-router-dom'

export function GuestGuard() {
  const { isAuth } = useOutletContext<{ isAuth: boolean }>()

  return isAuth ? <Navigate to={'/'} /> : <Outlet />
}
