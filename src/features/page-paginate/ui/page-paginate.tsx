import type { PaginationDto } from 'shared/ui/pagination/pagination'

import { Pagination } from 'shared/ui/pagination'
import { Select } from 'shared/ui/select'
import { Typography } from 'shared/ui/typography'

import s from 'features/page-paginate/ui/page-paginate.module.scss'

type PagePaginateProps = {
  changeItemsCount: (itemsCount: number) => void
  changePage: (page: number) => void
  pagination: PaginationDto
}
export function PagePaginate({ changeItemsCount, changePage, pagination }: PagePaginateProps) {
  console.log(pagination)

  const handleChangeItemsCountPerPage = (value: string) => {
    changeItemsCount(+value)
  }

  return (
    <div className={s.root}>
      <Pagination changePage={changePage} pagination={pagination} />
      <div className={s.select}>
        <Typography variant={'body2'}>Показать</Typography>
        <Select
          onValueChange={handleChangeItemsCountPerPage}
          options={[
            {
              title: '5',
              value: '5',
            },
            {
              title: '7',
              value: '7',
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
          value={pagination.itemsPerPage.toString()}
        />
        <Typography variant={'body2'}>на странице</Typography>
      </div>
    </div>
  )
}
