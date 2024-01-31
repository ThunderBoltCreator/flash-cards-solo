import { DropdownMenu } from 'shared/ui/dropdown'
import { Table } from 'shared/ui/table'

export function DecksPage() {
  return (
    <div>
      <DropdownMenu trigger={<span>TRIGGER!!!!!</span>} />
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
    </div>
  )
}
