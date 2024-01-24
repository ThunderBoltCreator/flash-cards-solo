import type { RouteObject } from 'react-router-dom'

import { createBrowserRouter } from 'react-router-dom'

import { App } from 'app/app'
import { SignIn } from 'pages/auth/sign-in'
import { SignUp } from 'pages/auth/sign-up'

export function AppRouter() {
  const privateRoutes: RouteObject[] = []
  const publicRoutes: RouteObject[] = [
    {
      element: <SignIn />,
      path: '/login',
    },
    {
      element: <SignUp />,
      path: '/register',
    },
  ]

  return createBrowserRouter([
    {
      children: [...privateRoutes, ...publicRoutes],
      element: App(),
      path: '/',
    },
  ])
}
