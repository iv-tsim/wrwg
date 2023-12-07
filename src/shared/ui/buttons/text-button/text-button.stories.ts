import type { Meta, StoryObj } from '@storybook/react'
import type { ITextButtonProps } from './'

import { TextButton } from './'

const meta: Meta<ITextButtonProps> = {
	component: TextButton,
	title: 'UI/buttons/TextButton',
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

export const DefaultDisabled: Story = {
	args: {
		children: 'Button',
		disabled: true,
	},
	name: 'default/disabled',
}

export const DefaultWithIcon: Story = {
	args: {
		iconId: 'arrow-back',
		children: 'Button',
	},
	name: 'default/with-icon',
}

export const DefaultWithIconDisabled: Story = {
	args: {
		iconId: 'arrow-back',
		children: 'Button',
		disabled: true,
	},
	name: 'default/with-icon/disabled',
}
