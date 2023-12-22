import { QuestionButton } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IQuestionButtonProps } from './'

const meta: Meta<IQuestionButtonProps> = {
	component: QuestionButton,
	title: 'UI/buttons/question-button',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'default',
}

export const Disabled: Story = {
	args: {
		disabled: true,
	},
	name: 'disabled',
}
