import type { Meta, StoryObj } from '@storybook/react'
import type { IStarsProps } from './'

import { Stars } from './'

const meta: Meta<IStarsProps> = {
	component: Stars,
	title: 'UI/Stars',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const MainWithIcon: Story = {
	args: {
		isReversed: false,
		number: 15,
	},
	name: 'main',
}

export const MainWithIconReversed: Story = {
	args: {
		isReversed: true,
		number: 15,
	},
	name: 'main/reversed',
}
