import { QuestionTimer } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IQuestionTimerProps } from './'

const meta: Meta<IQuestionTimerProps> = {
	component: QuestionTimer,
	title: 'Features/timers/question-timer',
	tags: ['autodocs'],
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		duration: 30,
	},
	name: 'default',
}
