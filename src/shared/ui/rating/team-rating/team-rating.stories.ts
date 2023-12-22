import { TeamRating } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { ITeamRatingProps } from './'

const meta: Meta<ITeamRatingProps> = {
	component: TeamRating,
	title: 'UI/rating/team-rating',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		order_number: 1,
		stars_number: 123,
		teamName: 'Территория Москва и Западная Сибирь',
	},
	name: 'default',
}
