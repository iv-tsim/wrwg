import type { Meta, StoryObj } from '@storybook/react'
import type { IconButtonProps } from './'

import { IconButton } from './'

const meta: Meta<IconButtonProps> = {
	component: IconButton,
	title: 'UI/buttons/IconButton',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const MainWithIcon: Story = {
	args: {
		children: 'Бортовой журнал',
		isReversed: false,
		iconId: 'journal',
	},
	name: 'main/with-icon',
}

export const MainWithIconReversed: Story = {
	args: {
		children: 'Бортовой журнал',
		isReversed: true,
		iconId: 'journal',
	},
	name: 'main/with-icon/reversed',
}

export const MainWithImage: Story = {
	args: {
		children: 'Бортовой журнал',
		isReversed: false,
		imageUrl: 'https://i.postimg.cc/bJF5RB7R/Frame-22.jpg',
	},
	name: 'main/with-image',
}

export const MainWithImageReversed: Story = {
	args: {
		children: 'Бортовой журнал',
		isReversed: true,
		imageUrl: 'https://i.postimg.cc/bJF5RB7R/Frame-22.jpg',
	},
	name: 'main/with-image/reversed',
}
