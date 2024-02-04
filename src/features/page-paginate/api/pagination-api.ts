import { baseApi } from 'shared/api/base-api'
type AuthorDto = {
  id: string
  name: string
}
type DeckDto = {
  author: AuthorDto
  cardsCount: number
  cover: null | string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
type PaginationDto = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
type PaginateDecksDto = {
  items: DeckDto
  maxCardsCount: number
  pagination: PaginationDto
}

type Args = {
  authorId?: string
  currentPage?: string
  itemsPerPage?: string
  maxCardsCount?: string
  minCardsCount?: string
  name?: string
  orderBy?: string
}
export const decksApi = baseApi.injectEndpoints({
  endpoints: build => ({
    paginateDecks: build.query<PaginateDecksDto, Args>({
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

export const { usePaginateDecksQuery } = decksApi
