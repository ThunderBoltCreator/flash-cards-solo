import { Navigate, Outlet, useOutletContext } from 'react-router-dom'

export function PublicRedirect() {
  const { isAuth } = useOutletContext<{ isAuth: boolean }>()

  // const isAuth = useAppSelector(selectIsAuth)
  console.log(isAuth)

  return isAuth ? <Navigate to={'/'} /> : <Outlet />
}
