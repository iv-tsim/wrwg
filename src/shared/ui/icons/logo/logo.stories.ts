import { Logo } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { ILogoProps } from './'

const meta: Meta<ILogoProps> = {
	component: Logo,
	title: 'UI/icons/logo',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'default',
}
