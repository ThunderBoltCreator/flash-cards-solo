import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithRefresh } from 'shared/api/base-query'

export const baseApi = createApi({
  baseQuery: baseQueryWithRefresh,
  endpoints: () => ({}),
  reducerPath: 'api',
  tagTypes: ['ME', 'DECKS', 'CARDS'],
})
