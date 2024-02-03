import { clsx } from 'clsx'
import { usePagination } from 'shared/ui/pagination/usePagination'
import { Select } from 'shared/ui/select'
import { Typography } from 'shared/ui/typography'

import s from './pagination.module.scss'

type PaginationDto = {
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

  console.log(paginate)

  return (
    <div className={s.root}>
      <button className={clsx(s.arrow, s.prevPage)}>{'<'}</button>
      <div className={s.pagination}>
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
      </div>
      <button className={clsx(s.arrow, s.nextPage)}>{'>'}</button>
      <Select
        options={[
          {
            title: '5',
            value: '5',
          },
          {
            title: '10',
            value: '10',
          },
          {
            title: '15',
            value: '15',
          },
        ]}
        pagination
      />
    </div>
  )
}
