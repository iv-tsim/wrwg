import { Input } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IInputProps } from './'

const meta: Meta<IInputProps> = {
	component: Input,
	title: 'UI/input',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const DarkCenter: Story = {
	args: {
		placeholder: 'позывной пилота',
		variant: 'dark',
		textAlign: 'center',
	},
	name: 'variant-dark/textAlign-center',
}

export const DarkLeft: Story = {
	args: {
		placeholder: 'позывной пилота',
		variant: 'dark',
		textAlign: 'left',
	},
	name: 'variant-dark/textAlign-left',
}

export const LightCenter: Story = {
	args: {
		placeholder: 'позывной пилота',
		variant: 'light',
		textAlign: 'center',
	},
	name: 'variant-light/textAlign-center',
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
}

export const LightLeft: Story = {
	args: {
		placeholder: 'позывной пилота',
		variant: 'light',
		textAlign: 'left',
	},
	name: 'variant-light/textAlign-left',
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
}

export const DarkInvalid: Story = {
	args: {
		placeholder: 'позывной пилота',
		variant: 'dark',
		textAlign: 'center',
		error: 'error',
	},
	name: 'variant-dark/invalid',
}

export const LightInvalid: Story = {
	args: {
		placeholder: 'позывной пилота',
		variant: 'light',
		textAlign: 'center',
		error: 'error',
	},
	name: 'variant-light/invalid',
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
}
