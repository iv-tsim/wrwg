import { TextButton } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { ITextButtonProps } from './'

const meta: Meta<ITextButtonProps> = {
	component: TextButton,
	title: 'UI/buttons/text-button',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Button',
	},
	name: 'default',
}

export const Disabled: Story = {
	args: {
		children: 'Button',
		disabled: true,
	},
	name: 'default/disabled',
}

export const WithIcon: Story = {
	args: {
		iconId: 'arrow-back',
		children: 'Button',
	},
	name: 'default/with-icon',
}

export const WithIconDisabled: Story = {
	args: {
		iconId: 'arrow-back',
		children: 'Button',
		disabled: true,
	},
	name: 'default/with-icon/disabled',
}
