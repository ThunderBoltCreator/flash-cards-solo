import type { RouteObject } from 'react-router-dom'

import { createBrowserRouter } from 'react-router-dom'

import { App } from 'app/app'
import { AuthGuard } from 'app/routing/auth-guard'
import { PublicRedirect } from 'app/routing/public-redirect'
import { SignIn } from 'pages/auth/sign-in'
import { SignUp } from 'pages/auth/sign-up'
import { ProfilePage } from 'pages/profile/ui/profile-page'

const privateRoutes: RouteObject[] = [
  {
    element: <div>Hello</div>,
    path: '/',
  },
  {
    element: <ProfilePage />,
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

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <AuthGuard />,
      },
      {
        children: publicRoutes,
        element: <PublicRedirect />,
      },
    ],
    element: <App />,
    path: '/',
  },
])
