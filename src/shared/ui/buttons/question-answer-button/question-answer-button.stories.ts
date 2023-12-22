import { QuestionAnswerButton } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IQuizAnswerProps } from './'

const meta: Meta<IQuizAnswerProps> = {
	component: QuestionAnswerButton,
	title: 'UI/buttons/question-answer-button',
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
		children: 'У планет-гигантов нет твёрдой поверхности, таким образом Летучая Рыба дает азимут. ',
	},
	name: 'default',
}

export const Correct: Story = {
	args: {
		children: 'У планет-гигантов нет твёрдой поверхности, таким образом Летучая Рыба дает азимут. ',
		isCorrect: true,
	},
	name: 'correct',
}

export const Wrong: Story = {
	args: {
		children: 'У планет-гигантов нет твёрдой поверхности, таким образом Летучая Рыба дает азимут. ',
		isWrong: true,
	},
	name: 'wrong',
}
