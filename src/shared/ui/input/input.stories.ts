import type { Meta, StoryObj } from '@storybook/react'
import type { IInputProps } from './'

import { Input } from './'

const meta: Meta<IInputProps> = {
	component: Input,
	title: 'UI/Input',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const InputDarkCenter: Story = {
	args: {
		placeholder: 'позывной пилота',
		variant: 'dark',
		textAlign: 'center',
	},
	name: 'input/dark/center',
}

export const InputDarkLeft: Story = {
	args: {
		placeholder: 'позывной пилота',
		variant: 'dark',
		textAlign: 'left',
	},
	name: 'input/dark/left',
}

export const InputLightCenter: Story = {
	args: {
		placeholder: 'позывной пилота',
		variant: 'light',
		textAlign: 'center',
	},
	name: 'input/light/center',
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
}

export const InputLightLeft: Story = {
	args: {
		placeholder: 'позывной пилота',
		variant: 'light',
		textAlign: 'left',
	},
	name: 'input/light/left',
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
}

export const InputDarkInvalid: Story = {
	args: {
		placeholder: 'позывной пилота',
		variant: 'dark',
		textAlign: 'center',
		error: 'error',
	},
	name: 'input/dark/invalid',
}

export const InputLightInvalid: Story = {
	args: {
		placeholder: 'позывной пилота',
		variant: 'light',
		textAlign: 'center',
		error: 'error',
	},
	name: 'input/light/invalid',
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
}
