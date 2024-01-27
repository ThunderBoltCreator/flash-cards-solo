import type { RouteObject } from 'react-router-dom'

import { createBrowserRouter } from 'react-router-dom'

import { App } from 'app/app'
import { AuthGuard } from 'app/routing/auth-guard'
import { SignIn } from 'pages/auth/sign-in'
import { SignUp } from 'pages/auth/sign-up'
import { Profile } from 'pages/profile'

export function AppRouter() {
  const privateRoutes: RouteObject[] = [
    {
      element: <div>Hello</div>,
      path: '/',
    },
    {
      element: <Profile />,
      path: '/profile',
    },
  ]
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
      children: [
        {
          children: privateRoutes,
          element: <AuthGuard />,
        },
        ...publicRoutes,
      ],
      element: App(),
      path: '/',
    },
  ])
}
