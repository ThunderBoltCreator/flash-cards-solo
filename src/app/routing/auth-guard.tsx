import { Navigate, Outlet, useOutletContext } from 'react-router-dom'

export function AuthGuard() {
  const { isAuth } = useOutletContext<{ isAuth: boolean }>()

  return isAuth ? <Outlet /> : <Navigate to={'/login'} />
}
