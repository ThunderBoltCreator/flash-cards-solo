import type { Meta, StoryObj } from '@storybook/react'

import { Checkboxes } from 'shared/ui/checkbox'

const meta = {
  argTypes: {
    checked: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
  args: {
    checked: false,
    disabled: false,
  },
  component: Checkboxes.base,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkboxes.base>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    label: "Hello I'm label",
  },
  render: args => <Checkboxes.base {...args} />,
}
export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: "Hello I'm label",
  },
  render: args => <Checkboxes.base {...args} />,
}
