import { UserRating } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IUserRatingProps } from './'

const meta: Meta<IUserRatingProps> = {
	component: UserRating,
	title: 'UI/rating/user-rating',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		order_number: 1,
		stars_number: 123,
		userName: 'tsimbalist',
	},
	name: 'default',
}

export const WithImage: Story = {
	args: {
		order_number: 1,
		stars_number: 123,
		userName: 'tsimbalist',
		userProfileImageUrl: 'https://i.postimg.cc/bJF5RB7R/Frame-22.jpg',
	},
	name: 'with-image',
}

export const CurrentUser: Story = {
	args: {
		order_number: 1,
		stars_number: 123,
		userName: 'tsimbalist',
		isCurrentUser: true,
		userProfileImageUrl: 'https://i.postimg.cc/bJF5RB7R/Frame-22.jpg',
	},
	name: 'current-user',
}
