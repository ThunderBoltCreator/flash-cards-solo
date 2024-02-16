import type { Meta, StoryObj } from '@storybook/react'

import { DecksSwitcher } from 'features/card-switcher'

const meta = {
  argTypes: {},
  component: DecksSwitcher,
  tags: ['autodocs'],
  title: 'Components/DecksSwitcher',
} satisfies Meta<typeof DecksSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
