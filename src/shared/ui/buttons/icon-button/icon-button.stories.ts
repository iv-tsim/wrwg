import { IconButton } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IconButtonProps } from './'

const meta: Meta<IconButtonProps> = {
	component: IconButton,
	title: 'UI/buttons/icon-button',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const WithIcon: Story = {
	args: {
		children: 'Бортовой журнал',
		isReversed: false,
		iconId: 'journal',
	},
	name: 'with-icon',
}

export const WithIconDisabled: Story = {
	args: {
		children: 'Бортовой журнал',
		isReversed: false,
		iconId: 'journal',
		disabled: true,
	},
	name: 'with-icon/disabled',
}

export const WithIconReversed: Story = {
	args: {
		children: 'Бортовой журнал',
		isReversed: true,
		iconId: 'journal',
	},
	name: 'with-icon/reversed',
}

export const WithImage: Story = {
	args: {
		children: 'Бортовой журнал',
		isReversed: false,
		imageUrl: 'https://i.postimg.cc/bJF5RB7R/Frame-22.jpg',
	},
	name: 'with-image',
}

export const WithImageDisabled: Story = {
	args: {
		children: 'Бортовой журнал',
		isReversed: false,
		imageUrl: 'https://i.postimg.cc/bJF5RB7R/Frame-22.jpg',
		disabled: true,
	},
	name: 'with-image/disabled',
}

export const WithImageReversed: Story = {
	args: {
		children: 'Бортовой журнал',
		isReversed: true,
		imageUrl: 'https://i.postimg.cc/bJF5RB7R/Frame-22.jpg',
	},
	name: 'with-image/reversed',
}
