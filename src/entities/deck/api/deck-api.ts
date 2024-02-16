import type { DecksFilterAndSort, PaginateDeckDto } from './types'

import { baseApi } from 'shared/api/base-api'

export const deckApi = baseApi.injectEndpoints({
  endpoints: build => ({
    paginateDecks: build.query<PaginateDeckDto, DecksFilterAndSort>({
      query: ({
        authorId,
        currentPage,
        itemsPerPage,
        maxCardsCount,
        minCardsCount,
        name,
        orderBy,
      }) => ({
        params: {
          authorId,
          currentPage,
          itemsPerPage,
          maxCardsCount,
          minCardsCount,
          name,
          orderBy,
        },
        url: 'v2/decks',
      }),
    }),
  }),
})

export const { usePaginateDecksQuery } = deckApi
