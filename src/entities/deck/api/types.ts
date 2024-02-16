export type AuthorDto = {
  id: string
  name: string
}
export type DeckDto = {
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
export type PaginationDto = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type PaginateDeckDto = {
  items: DeckDto[]
  maxCardsCount: number
  pagination: PaginationDto
}

export type DecksFilterAndSort = {
  authorId?: null | string
  currentPage?: null | string
  itemsPerPage?: null | string
  maxCardsCount?: null | string
  minCardsCount?: null | string
  name?: null | string
  orderBy?: null | string
}
