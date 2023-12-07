import type { Meta, StoryObj } from '@storybook/react'
import type { IMenuItemProps } from './'

import { MenuItem } from './'

const meta: Meta<IMenuItemProps> = {
	component: MenuItem,
	title: 'Pages/menu/MenuItem',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const MainDirectionLeft: Story = {
	args: {
		planet: 'меркурий',
		planetDirection: 'left',
		title: 'викторины',
		to: '#',
	},
	name: 'main/direction/left',
}

export const MainDirectionLeftDisabled: Story = {
	args: {
		planet: 'меркурий',
		planetDirection: 'left',
		title: 'викторины',
		to: '#',
		disabled: true,
	},
	name: 'main/direction/left/disabled',
}

export const MainDirectionRight: Story = {
	args: {
		planet: 'меркурий',
		planetDirection: 'right',
		title: 'викторины',
		to: '#',
	},
	name: 'main/direction/right',
}

export const MainDirectionRightDisabled: Story = {
	args: {
		planet: 'меркурий',
		planetDirection: 'right',
		title: 'викторины',
		to: '#',
		disabled: true,
	},
	name: 'main/direction/right/disabled',
}
