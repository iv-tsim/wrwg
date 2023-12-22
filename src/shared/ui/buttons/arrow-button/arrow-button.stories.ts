import { ArrowButton } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IArrowButtonProps } from './'

const meta: Meta<IArrowButtonProps> = {
	component: ArrowButton,
	title: 'UI/buttons/arrow-button',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const DirectionLeft: Story = {
	args: {
		direction: 'left',
	},
	name: 'direction-left',
}

export const DirectionRight: Story = {
	args: {
		direction: 'right',
	},
	name: 'direction-right',
}

export const DirectionLeftDisabled: Story = {
	args: {
		direction: 'left',
		disabled: true,
	},
	name: 'direction-left/disabled',
}

export const DirectionRightDisabled: Story = {
	args: {
		direction: 'right',
		disabled: true,
	},
	name: 'direction-right/disabled',
}
