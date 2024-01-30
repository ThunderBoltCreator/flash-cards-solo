import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'

import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { router } from 'app/routing/app-router'
import { Mutex } from 'async-mutex'

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es/',
  credentials: 'include',
})

export const baseQueryWithRefresh: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()

  let res = await baseQuery(args, api, extraOptions)

  if (res.error && res.error.status === 401) {
    if (api.endpoint === 'login') {
      return res
    }

    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      const refreshResult = await baseQuery(
        {
          method: 'POST',
          url: '/v1/auth/refresh-token',
        },
        api,
        extraOptions
      )

      if (refreshResult.meta?.response?.status === 204) {
        res = await baseQuery(args, api, extraOptions)
      } else {
        router.navigate('/login')
      }

      release()
    } else {
      await mutex.waitForUnlock()
      res = await baseQuery(args, api, extraOptions)
    }
  }

  return res
}
