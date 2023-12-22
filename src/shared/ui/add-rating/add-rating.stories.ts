import { AddRating } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IAddRatingProps } from './'

const meta: Meta<IAddRatingProps> = {
	component: AddRating,
	title: 'UI/add-rating',
	tags: ['autodocs'],
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		number: 20,
		size: 'default',
	},
	name: 'default',
}

export const Small: Story = {
	args: {
		number: 20,
		size: 'small',
	},
	name: 'small',
}
