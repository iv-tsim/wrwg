import type { Meta, StoryObj } from '@storybook/react'
import type { IMainButtonProps } from './'

import { MainButton } from './'

const meta: Meta<IMainButtonProps> = {
	component: MainButton,
	title: 'UI/buttons/MainButton',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Dark: Story = {
	args: {
		variant: 'dark',
		children: 'Button',
	},
	name: 'dark',
}

export const DarkDisabled: Story = {
	args: {
		variant: 'dark',
		children: 'Button',
		disabled: true,
	},
	name: 'dark/disabled',
}

export const Primary: Story = {
	args: {
		variant: 'primary',
		children: 'Button',
	},
	name: 'primary',
}

export const PrimaryDisabled: Story = {
	args: {
		variant: 'primary',
		children: 'Button',
		disabled: true,
	},
	name: 'primary/disabled',
}

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		children: 'Button',
	},
	name: 'secondary',
}

export const SecondaryDisabled: Story = {
	args: {
		variant: 'secondary',
		children: 'Button',
		disabled: true,
	},
	name: 'secondary/disabled',
}

export const Transparent: Story = {
	args: {
		variant: 'transparent',
		children: 'Button',
	},
	name: 'transparent',
}

export const TransparentDisabled: Story = {
	args: {
		variant: 'transparent',
		children: 'Button',
		disabled: true,
	},
	name: 'transparent/disabled',
}

