import { CloseButton } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { ICloseButtonProps } from './'

const meta: Meta<ICloseButtonProps> = {
	component: CloseButton,
	title: 'UI/buttons/close-button',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const VariantLight: Story = {
	args: {
		variant: 'light',
	},
	name: 'variant-light',
}

export const VariantLightDisabled: Story = {
	args: {
		variant: 'light',
		disabled: true,
	},
	name: 'variant-light/disabled',
}

export const VariantDark: Story = {
	args: {
		variant: 'dark',
	},
	name: 'variant-dark',
}

export const VariantDarkDisabled: Story = {
	args: {
		variant: 'dark',
		disabled: true,
	},
	name: 'variant-dark/disabled',
}
