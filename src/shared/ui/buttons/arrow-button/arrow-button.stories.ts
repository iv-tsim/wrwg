import type { Meta, StoryObj } from '@storybook/react'
import type { IArrowButtonProps } from './'

import { ArrowButton } from './'

const meta: Meta<IArrowButtonProps> = {
	component: ArrowButton,
	title: 'UI/buttons/ArrowButton',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const MainLeft: Story = {
	args: {
		direction: 'left',
	},
	name: 'main/left',
}

export const MainRight: Story = {
	args: {
		direction: 'right',
	},
	name: 'main/right',
}

export const MainLeftDisabled: Story = {
	args: {
		direction: 'left',
		disabled: true,
	},
	name: 'main/left/disabled',
}

export const MainRightDisabled: Story = {
	args: {
		direction: 'right',
		disabled: true,
	},
	name: 'main/right/disabled',
}
