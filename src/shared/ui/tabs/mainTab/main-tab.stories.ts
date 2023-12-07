import type { Meta, StoryObj } from '@storybook/react'
import type { IMainTabProps } from './'

import { MainTab } from './'

const meta: Meta<IMainTabProps> = {
	component: MainTab,
	title: 'UI/MainTab',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Maintab: Story = {
	args: {
		children: 'команда',
		isActive: false,
	},
	name: 'main',
}

export const MaintabActive: Story = {
	args: {
		children: 'команда',
		isActive: true,
	},
	name: 'main/active',
}

export const MaintabDisabled: Story = {
	args: {
		children: 'команда',
		disabled: true,
	},
	name: 'main/disabled',
}

