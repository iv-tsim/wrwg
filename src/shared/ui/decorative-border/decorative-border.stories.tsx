import { DecorativeBorder } from './'
import { TextButton } from '../buttons'

import type { Meta, StoryObj } from '@storybook/react'
import type { IDecorativeBorderProps } from './'

const meta: Meta<IDecorativeBorderProps> = {
	component: DecorativeBorder,
	title: 'Pages/auth/decorative-border',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Left: Story = {
	args: {
		position: 'left',
	},
	name: 'position-left',
}

export const LeftWithChildren: Story = {
	args: {
		position: 'left',
		children: <TextButton iconId='arrow-back'>Назад</TextButton>,
	},
	name: 'position-left/with-children',
}

export const Right: Story = {
	args: {
		position: 'right',
	},
	name: 'position-right',
}
