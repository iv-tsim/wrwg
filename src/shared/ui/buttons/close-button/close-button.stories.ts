import type { Meta, StoryObj } from '@storybook/react'
import type { ICloseButtonProps } from './'

import { CloseButton } from './'

const meta: Meta<ICloseButtonProps> = {
	component: CloseButton,
	title: 'UI/buttons/CloseButton',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const MainLight: Story = {
	args: {
		variant: 'light',
	},
	name: 'main/light',
}

export const MainLightDisabled: Story = {
	args: {
		variant: 'light',
		disabled: true,
	},
	name: 'main/light/disabled',
}

export const MainDark: Story = {
	args: {
		variant: 'dark',
	},
	name: 'main/dark',
}

export const MainDarkDisabled: Story = {
	args: {
		variant: 'dark',
		disabled: true,
	},
	name: 'main/dark/disabled',
}
