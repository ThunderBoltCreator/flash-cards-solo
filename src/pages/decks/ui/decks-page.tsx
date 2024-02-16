import type { User } from 'entities/user/api/types'

import { useOutletContext } from 'react-router-dom'

import { usePaginateDecksQuery } from 'entities/deck'
import { PagePaginate } from 'features/page-paginate/ui/page-paginate'
import { useDebounce } from 'shared/lib/use-debounce'
import { Table } from 'shared/ui/table'
import { Typography } from 'shared/ui/typography'
import { DecksSort } from 'widgets/decks-sort'
import { useDecksSortFilter } from 'widgets/decks-sort/model/use-decks-sort-filter'

import s from './decks-page.module.scss'

import { TableActions } from './table-actions'

type SearchParams = {
  authorId?: null | string
  currentPage?: null | string
  decks?: null | string
  itemsPerPage?: null | string
  maxCardsCount?: null | string
  minCardsCount?: null | string
  name?: null | string
  orderBy?: null | string
}
export function DecksPage() {
  const { user } = useOutletContext<{ user: User }>()

  const {
    changeCurrentPage,
    changeDecksAuthorFilter,
    changeItemsCountPerPage,
    changeMimMaxCards,
    changeSearchName,
    clearFilter,
    currentPage,
    authorForShow,
    itemsPerPage,
    maxCardsCount,
    minCardsCount,
    name,
    orderBy,
  } = useDecksSortFilter()
  const debounceName = useDebounce(name)

  const { data } = usePaginateDecksQuery({
    authorId: authorForShow === 'my' ? user.id : undefined,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
    maxCardsCount: maxCardsCount,
    minCardsCount: minCardsCount,
    name: debounceName,
    orderBy: orderBy,
  })

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div className={s.root}>
      <Typography className={s.title} variant={'large'}>
        Decks list
      </Typography>
      <DecksSort
        authorForShow={authorForShow}
        changeDecksAuthorFilter={changeDecksAuthorFilter}
        changeName={changeSearchName}
        className={s.sort}
        onChangeCardsCount={changeMimMaxCards}
        onClearFilter={clearFilter}
      />
      <Table.Root className={s.table}>
        <Table.Head>
          <Table.Row className={s.row}>
            <Table.HeadCell className={s.titleColumn}>Name</Table.HeadCell>
            <Table.HeadCell className={s.cardsCountColumn}>Cards</Table.HeadCell>
            <Table.HeadCell className={s.updatedColumn}>Last Updated</Table.HeadCell>
            <Table.HeadCell className={s.createdColumn}>Created By</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.items.map(deck => (
            <Table.Row key={deck.id}>
              <Table.Cell className={s.deckName} cover={deck.cover}>
                {deck.name}
              </Table.Cell>
              <Table.Cell>{deck.cardsCount}</Table.Cell>
              <Table.Cell>{new Date(deck.updated).toLocaleDateString()}</Table.Cell>
              <Table.Cell>{deck.author.name}</Table.Cell>
              <Table.Cell>
                <TableActions author={deck.author.id === user.id} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <PagePaginate
        changeItemsCount={changeItemsCountPerPage}
        changePage={changeCurrentPage}
        pagination={data?.pagination}
      />
    </div>
  )
}
