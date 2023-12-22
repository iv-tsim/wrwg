import { MainButton } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IMainButtonProps } from './'

const meta: Meta<IMainButtonProps> = {
	component: MainButton,
	title: 'UI/buttons/main-button',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Dark: Story = {
	args: {
		variant: 'dark',
		children: 'Button',
	},
	name: 'variant-dark',
}

export const DarkDisabled: Story = {
	args: {
		variant: 'dark',
		children: 'Button',
		disabled: true,
	},
	name: 'variant-dark/disabled',
}

export const Primary: Story = {
	args: {
		variant: 'primary',
		children: 'Button',
	},
	name: 'variant-primary',
}

export const PrimaryDisabled: Story = {
	args: {
		variant: 'primary',
		children: 'Button',
		disabled: true,
	},
	name: 'variant-primary/disabled',
}

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		children: 'Button',
	},
	name: 'variant-secondary',
}

export const SecondaryDisabled: Story = {
	args: {
		variant: 'secondary',
		children: 'Button',
		disabled: true,
	},
	name: 'variant-secondary/disabled',
}

export const TransparentLight: Story = {
	args: {
		variant: 'transparent-light',
		children: 'Button',
	},
	name: 'variant-transparent-light',
}

export const TransparentLightDisabled: Story = {
	args: {
		variant: 'transparent-light',
		children: 'Button',
		disabled: true,
	},
	name: 'variant-transparent-light/disabled',
}

export const TransparentDark: Story = {
	args: {
		variant: 'transparent-dark',
		children: 'Button',
	},
	name: 'variant-transparent-dark',
}

export const TransparentDarkDisabled: Story = {
	args: {
		variant: 'transparent-dark',
		children: 'Button',
		disabled: true,
	},
	name: 'variant-transparent-dark/disabled',
}
