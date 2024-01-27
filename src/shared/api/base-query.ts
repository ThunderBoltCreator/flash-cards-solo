import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'

import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es',
  credentials: 'include',
  prepareHeaders: headers => {
    headers.append('x-auth-skip', 'true')
  },
})

export const baseQueryWithRefresh: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()

  let res = await baseQuery(args, api, extraOptions)

  if (res.error && res.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      const reqResult = await baseQuery(
        {
          method: 'POST',
          url: '/v1/auth/refresh-token',
        },
        api,
        extraOptions
      )

      if (reqResult.meta?.response?.status === 204) {
        baseQuery(args, api, extraOptions)
      }

      release()
    } else {
      await mutex.waitForUnlock()
      res = await baseQuery(args, api, extraOptions)
    }
  }

  return res
}
