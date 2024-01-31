import type { ReactNode } from 'react'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'

type DropdownMenuProps = {
  trigger: ReactNode
}
export const DropdownMenu = ({ trigger }: DropdownMenuProps) => {
  return (
    <RadixDropdown.Root>
      <RadixDropdown.Trigger>{trigger}</RadixDropdown.Trigger>
      <RadixDropdown.Content>
        <RadixDropdown.Item>First</RadixDropdown.Item>
        <RadixDropdown.Separator />
        <RadixDropdown.Item>Second</RadixDropdown.Item>
        <RadixDropdown.Separator />
        <RadixDropdown.Item>Third</RadixDropdown.Item>
      </RadixDropdown.Content>
    </RadixDropdown.Root>
  )
}
