import { useSearchParams } from 'react-router-dom'

export const useDecksSortFilter = () => {
  const [params, setParams] = useSearchParams({})

  const changeCurrentPage = (newPage: number) => {
    params.set('currentPage', `${newPage}`)
    setParams(params)
  }
  const changeItemsCountPerPage = (itemsCount: number) => {
    params.set('itemsPerPage', `${itemsCount}`)
    setParams(params)
  }

  const changeMimMaxCards = (minMax: number[]) => {
    params.set('minCardsCount', `${minMax[0]}`)
    params.set('maxCardsCount', `${minMax[1]}`)
    setParams(params)
  }

  const changeDecksAuthorFilter = (newAuthor: string) => {
    params.set('author', newAuthor)
    setParams(params)
  }

  const changeSearchName = (name: string) => {
    params.set('name', name)
    setParams(params)

    if (!name) {
      params.delete('name')
      setParams(params)
    }
  }

  const clearFilter = () => {
    setParams({})
  }

  return {
    authorForShow: params.get('author') !== 'my' ? 'all' : 'my',
    changeCurrentPage,
    changeDecksAuthorFilter,
    changeItemsCountPerPage,
    changeMimMaxCards,
    changeSearchName,
    clearFilter,
    currentPage: params.get('currentPage') || '1',
    itemsPerPage: params.get('itemsPerPage') || '7',
    maxCardsCount: params.get('maxCardsCount') || undefined,
    minCardsCount: params.get('minCardsCount') || '0',
    name: params.get('name') || '',
    orderBy: params.get('orderBy') || 'name-asc',
  }
}
