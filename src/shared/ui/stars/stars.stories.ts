import { Stars } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IStarsProps } from './'

const meta: Meta<IStarsProps> = {
	component: Stars,
	title: 'UI/stars',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		isReversed: false,
		number: 15,
	},
	name: 'default',
}

export const Reversed: Story = {
	args: {
		isReversed: true,
		number: 15,
	},
	name: 'reversed',
}

export const Disabled: Story = {
	args: {
		isReversed: true,
		number: 15,
		disabled: true,
	},
	name: 'disabled',
}

export const SizeSmall: Story = {
	args: {
		isReversed: false,
		size: 'small',
		number: 15,
	},
	name: 'size-small',
}

export const SizeSmallReversed: Story = {
	args: {
		isReversed: true,
		size: 'small',
		number: 15,
	},
	name: 'size-small/reversed',
}

export const SizeSmallDisabled: Story = {
	args: {
		isReversed: false,
		size: 'small',
		number: 15,
		disabled: true,
	},
	name: 'size-small/disabled',
}
