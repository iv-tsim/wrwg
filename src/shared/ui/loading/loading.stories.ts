import { Loading } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { ILoadingProps } from './'

const meta: Meta<ILoadingProps> = {
	component: Loading,
	title: 'UI/loading',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'default',
}
