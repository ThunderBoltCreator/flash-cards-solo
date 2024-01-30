import type { UpdateUserRequest, User, UserDto } from 'entities/user/api/types'

import { mapUser } from 'entities/user/lib/map-user'
import { baseApi } from 'shared/api/base-api'

export const userApi = baseApi.injectEndpoints({
  endpoints: build => ({
    me: build.query<User, void>({
      providesTags: ['ME'],
      query: () => ({
        url: 'v1/auth/me',
      }),
      transformResponse: (response: UserDto) => mapUser(response),
    }),
    updateUser: build.mutation<void, UpdateUserRequest>({
      invalidatesTags: ['ME'],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        let avatar

        const patchResult = dispatch(
          userApi.util.updateQueryData('me', undefined, draft => {
            const newName = args.get('name')
            const newAvatar = args.get('avatar')

            if (draft && newAvatar instanceof File) {
              avatar = URL.createObjectURL(newAvatar)
              draft.avatar = URL.createObjectURL(newAvatar)
            }

            if (draft && newName) {
              draft.name = newName as string
            }
          })
        )

        try {
          await queryFulfilled
        } catch (e) {
          patchResult.undo()
        } finally {
          avatar && URL.revokeObjectURL(avatar)
        }
      },
      query: args => ({
        body: args,
        method: 'PATCH',
        url: '/v1/auth/me',
      }),
    }),
  }),
})

export const { useMeQuery, useUpdateUserMutation } = userApi
