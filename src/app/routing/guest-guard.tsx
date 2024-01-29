import { Navigate, Outlet } from 'react-router-dom'

import { useMeQuery } from 'entities/user/api/user-api'

export function GuestGuard() {
  const { isError } = useMeQuery()

  return !isError ? <Navigate to={'/'} /> : <Outlet />
}
