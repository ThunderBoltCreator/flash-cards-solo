import type { PaginationDto } from 'shared/ui/pagination/pagination'

import { useState } from 'react'

import { usePaginateDecksQuery } from 'features/page-paginate/api/pagination-api'
import { Pagination } from 'shared/ui/pagination'
import { Select } from 'shared/ui/select'
import { Typography } from 'shared/ui/typography'

import s from 'features/page-paginate/ui/page-paginate.module.scss'
type PagePaginateProps = {
  pagination: PaginationDto
}
export function PagePaginate({ pagination }: PagePaginateProps) {
  const [itemsCount, setItemsCount] = useState(pagination.itemsPerPage.toString())

  const { data } = usePaginateDecksQuery({
    currentPage: '3',
    itemsPerPage: '10',
    orderBy: 'name-desc',
  })

  console.log(data)

  return (
    <div className={s.root}>
      <Pagination pagination={pagination} />
      <div className={s.select}>
        <Typography variant={'body2'}>Показать</Typography>
        <Select
          onValueChange={setItemsCount}
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
          value={itemsCount}
        />
        <Typography variant={'body2'}>на странице</Typography>
      </div>
    </div>
  )
}
