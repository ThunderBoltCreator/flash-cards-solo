import { Pagination } from 'shared/ui/pagination'
import { Table } from 'shared/ui/table'

export function DecksPage() {
  return (
    <div>
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.TitleCell>First</Table.TitleCell>
            <Table.TitleCell>Second</Table.TitleCell>
            <Table.TitleCell>Third</Table.TitleCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>First Cell</Table.Cell>
            <Table.Cell>Second Cell</Table.Cell>
            <Table.Cell>Third Cell</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>First Cell</Table.Cell>
            <Table.Cell>Second Cell</Table.Cell>
            <Table.Cell>Third Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      {/*<Select*/}
      {/*  options={[*/}
      {/*    { title: 'ohohohoho', value: 'ahahaha' },*/}
      {/*    { title: 'ahahaha', value: 'ohohohoho' },*/}
      {/*  ]}*/}
      {/*  pagination*/}
      {/*/>*/}
      <Pagination
        pagination={{ currentPage: 6, itemsPerPage: 5, totalItems: 75, totalPages: 15 }}
      />
    </div>
  )
}
