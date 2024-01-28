import type { Meta, StoryObj } from '@storybook/react'

import { Profile } from 'features/profile/ui/profile'

const meta = {
  component: Profile,
  tags: ['autodocs'],
  title: 'Pages/Profile',
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
