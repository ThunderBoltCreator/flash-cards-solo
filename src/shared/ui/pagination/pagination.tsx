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
  pagination: PaginationDto
}
export function Pagination({ pagination }: PaginationProps) {
  const paginate = usePagination({
    currentPage: pagination.currentPage,
    pageSize: pagination.itemsPerPage,
    totalCount: pagination.totalItems,
    totalPages: pagination.totalPages,
  })

  return (
    <div className={s.pagination}>
      <button className={clsx(s.arrow, s.prevPage)} disabled={pagination.currentPage === 1}>
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
          <button className={clsx(s.item)} key={i}>
            <Typography as={'span'} variant={'body2'}>
              {el}
            </Typography>
          </button>
        )
      })}
      <button
        className={clsx(s.arrow, s.nextPage)}
        disabled={pagination.currentPage === pagination.totalPages}
      >
        <ChevronLeftIcon />
      </button>
    </div>
  )
}
