import type { RequestLoginBody, ResponseLoginBody } from './types'

import { onLogout } from 'entities/session/model/slice'
import { baseApi } from 'shared/api/base-api'

export const sessionApi = baseApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<ResponseLoginBody, RequestLoginBody>({
      invalidatesTags: ['ME'],
      query: arg => {
        console.log('arg', arg)

        return {
          body: arg,
          method: 'POST',
          url: '/v1/auth/login',
        }
      },
    }),
    logout: build.mutation<void, void>({
      query: () => ({ method: 'POST', url: '/v1/auth/logout' }),
    }),
  }),
})

export const { useLoginMutation, useLogoutMutation } = sessionApi
