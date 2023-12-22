import { MainTab } from '.'

import type { Meta, StoryObj } from '@storybook/react'
import type { IMainTabProps } from '.'

const meta: Meta<IMainTabProps> = {
	component: MainTab,
	title: 'UI/main-tab',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'команда',
		isActive: false,
	},
	name: 'default',
}

export const Active: Story = {
	args: {
		children: 'команда',
		isActive: true,
	},
	name: 'active',
}

export const Disabled: Story = {
	args: {
		children: 'команда',
		disabled: true,
	},
	name: 'disabled',
}
