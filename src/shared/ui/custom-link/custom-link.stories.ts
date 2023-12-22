import { CustomLink } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { ILinkProps } from './'

const meta: Meta<ILinkProps> = {
	component: CustomLink,
	title: 'UI/custom-link',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Забыт пароль?',
	},
	name: 'default',
}
