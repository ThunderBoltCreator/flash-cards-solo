import type { RequestLoginBody, ResponseLoginBody } from './types'

import { baseApi } from 'shared/api/base-api'

export const sessionApi = baseApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<ResponseLoginBody, RequestLoginBody>({
      invalidatesTags: (_, error) => (error ? [] : ['ME']),
      query: arg => ({
        body: arg,
        method: 'POST',
        url: '/v1/auth/login',
      }),
    }),
    logout: build.mutation<void, void>({
      invalidatesTags: (_, error) => (error ? [] : ['ME']),
      query: () => ({ method: 'POST', url: '/v1/auth/logout' }),
    }),
  }),
})

export const { useLoginMutation, useLogoutMutation } = sessionApi
