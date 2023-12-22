import { QuizPreview } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IQuizPreviewProps } from './'

const meta: Meta<IQuizPreviewProps> = {
	component: QuizPreview,
	title: 'Pages/mercury/quiz-preview',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		title: 'ДОСТУПНАЯ ЗОНА ВЫСАДКИ',
		description:
			'Проверим насколько хорошо ты знаком с историей компании. Пройди викторину без ошибок и заработай звезду в персональный рейтинг!',
	},
	name: 'default',
}
