import type { User } from 'entities/user/api/types'

import { Navigate, Outlet, useOutletContext } from 'react-router-dom'

export function AuthGuard() {
  const { isAuth, user } = useOutletContext<{ isAuth: boolean; user: User | undefined }>()

  return isAuth ? <Outlet context={{ user }} /> : <Navigate to={'/login'} />
}
