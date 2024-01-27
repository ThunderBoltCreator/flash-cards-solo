import { Navigate, Outlet } from 'react-router-dom'

import { useAppSelector } from 'app/store/hooks'
import { selectIsAuth } from 'entities/session'

export function AuthGuard() {
  const isAuth = useAppSelector(selectIsAuth)

  return isAuth ? <Outlet /> : <Navigate to={'/login'} />
}
