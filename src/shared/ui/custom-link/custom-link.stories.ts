import type { Meta, StoryObj } from '@storybook/react'
import type { ILinkProps } from './'

import { CustomLink } from './'

const meta: Meta<ILinkProps> = {
	component: CustomLink,
	title: 'UI/CustomLink',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const CustomLinkDefault: Story = {
	args: {
		children: 'Забыт пароль?',
	},
	name: 'custom-link',
}
