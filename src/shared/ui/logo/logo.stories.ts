import type { Meta, StoryObj } from '@storybook/react'
import type { ILogoProps } from './'

import { Logo } from './'

const meta: Meta<ILogoProps> = {
	component: Logo,
	title: 'UI/Logo',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const LogoDefault: Story = {
	name: 'logo',
}
