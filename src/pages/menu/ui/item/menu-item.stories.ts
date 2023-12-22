import { MenuItem } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IMenuItemProps } from './'

const meta: Meta<IMenuItemProps> = {
	component: MenuItem,
	title: 'Pages/menu/menu-item',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const DirectionLeft: Story = {
	args: {
		planet: 'меркурий',
		planetDirection: 'left',
		title: 'викторины',
		to: '#',
	},
	name: 'direction-left',
}

export const DirectionLeftDisabled: Story = {
	args: {
		planet: 'меркурий',
		planetDirection: 'left',
		title: 'викторины',
		to: '#',
		disabled: true,
	},
	name: 'direction-left/disabled',
}

export const DirectionRight: Story = {
	args: {
		planet: 'меркурий',
		planetDirection: 'right',
		title: 'викторины',
		to: '#',
	},
	name: 'direction-right',
}

export const DirectionRightDisabled: Story = {
	args: {
		planet: 'меркурий',
		planetDirection: 'right',
		title: 'викторины',
		to: '#',
		disabled: true,
	},
	name: 'direction-right/disabled',
}
