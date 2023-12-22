import { RatingStars } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IRatingStarsProps } from './'

const meta: Meta<IRatingStarsProps> = {
	component: RatingStars,
	title: 'Pages/rating/rating-stars',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		number: 123,
		text: 'ваши звезды',
	},
	name: 'default',
}
