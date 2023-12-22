import { ComplicatedButton } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IComplicatedButtonProps } from './'

const meta: Meta<IComplicatedButtonProps> = {
	component: ComplicatedButton,
	title: 'UI/buttons/complicated-button',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Старт',
	},
	name: 'default',
}

export const Disabled: Story = {
	args: {
		children: 'Старт',
		disabled: true,
	},
	name: 'disabled',
}
