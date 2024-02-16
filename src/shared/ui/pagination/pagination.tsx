import { clsx } from 'clsx'
import ChevronLeftIcon from 'shared/assets/icons/chevron-left-icon'
import { usePagination } from 'shared/ui/pagination/usePagination'
import { Typography } from 'shared/ui/typography'

import s from './pagination.module.scss'

export type PaginationDto = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

type PaginationProps = {
  changePage: (page: number) => void
  pagination: PaginationDto
}
export function Pagination({ changePage, pagination }: PaginationProps) {
  const paginate = usePagination({
    currentPage: pagination.currentPage,
    pageSize: pagination.itemsPerPage,
    totalCount: pagination.totalItems,
    totalPages: pagination.totalPages,
  })

  const onClickNext = () => {
    changePage(pagination.currentPage + 1)
  }
  const onClickPrev = () => {
    changePage(pagination.currentPage - 1)
  }

  const onClickPaginate = (page: number) => {
    changePage(page)
  }

  return (
    <div className={s.pagination}>
      <button
        className={clsx(s.arrow, s.prevPage)}
        disabled={pagination.currentPage === 1}
        onClick={onClickPrev}
      >
        <ChevronLeftIcon />
      </button>
      {paginate?.map((el, i) => {
        if (typeof el === 'string') {
          return (
            <span className={s.dots} key={i}>
              {el}
            </span>
          )
        }

        if (el === pagination.currentPage) {
          return (
            <Typography as={'span'} className={clsx(s.item, s.active)} key={i} variant={'body2'}>
              {el}
            </Typography>
          )
        }

        return (
          <button className={clsx(s.item)} key={i} onClick={() => onClickPaginate(el)}>
            <Typography as={'span'} variant={'body2'}>
              {el}
            </Typography>
          </button>
        )
      })}
      <button
        className={clsx(s.arrow, s.nextPage)}
        disabled={pagination.currentPage === pagination.totalPages}
        onClick={onClickNext}
      >
        <ChevronLeftIcon />
      </button>
    </div>
  )
}
