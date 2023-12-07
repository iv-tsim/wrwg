import type { Meta, StoryObj } from '@storybook/react'
import type { IComplicatedButtonProps } from './'

import { ComplicatedButton } from './'

const meta: Meta<IComplicatedButtonProps> = {
	component: ComplicatedButton,
	title: 'UI/buttons/ComplicatedButton',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Main: Story = {
	args: {
		children: 'Старт',
	},
	name: 'main',
}

export const MainDisabled: Story = {
	args: {
		children: 'Старт',
		disabled: true,
	},
	name: 'main/disabled',
}

