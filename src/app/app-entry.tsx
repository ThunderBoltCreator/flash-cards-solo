import React from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { router } from 'app/routing/app-router'
import { store } from 'app/store/store'
import ReactDOM from 'react-dom/client'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import 'react-toastify/dist/ReactToastify.css'
import 'shared/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
