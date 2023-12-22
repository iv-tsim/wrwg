import { FormTimer } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IFormTimerProps } from './'

const meta: Meta<IFormTimerProps> = {
	component: FormTimer,
	title: 'Features/timers/form-timer',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		time: 30,
	},
	name: 'default',
}
