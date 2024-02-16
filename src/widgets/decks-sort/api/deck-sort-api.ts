import { baseApi } from 'shared/api/base-api'

export const deckSortApi = baseApi.injectEndpoints({
  endpoints: build => ({
    minMaxCards: build.query<{ max: number; min: number }, void>({
      query: () => ({
        url: '/v2/decks/min-max-cards',
      }),
    }),
  }),
})

export const { useMinMaxCardsQuery } = deckSortApi
