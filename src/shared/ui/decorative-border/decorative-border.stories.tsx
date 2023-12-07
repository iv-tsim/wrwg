import type { Meta, StoryObj } from '@storybook/react'
import type { IDecorativeBorderProps } from './'

import { DecorativeBorder } from './'
import { TextButton } from '../buttons'

const meta: Meta<IDecorativeBorderProps> = {
	component: DecorativeBorder,
	title: 'Pages/auth/DecorativeBorder',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const BorderDefaultLeft: Story = {
	args: {
		position: 'left',
	},
	name: 'border/position/left',
}

export const BorderDefaultLeftWithChildren: Story = {
	args: {
		position: 'left',
		children: <TextButton iconId='arrow-back'>Назад</TextButton>,
	},
	name: 'border/position/left/with-children',
}

export const BorderDefaultRight: Story = {
	args: {
		position: 'right',
	},
	name: 'border/position/right',
}
