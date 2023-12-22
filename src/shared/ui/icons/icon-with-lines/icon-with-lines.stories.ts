import { IconWithLines } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IIconWithLinesProps } from './'

const meta: Meta<IIconWithLinesProps> = {
	component: IconWithLines,
	title: 'UI/icons/icon-with-lines',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const WithIcon: Story = {
	args: {
		iconId: 'journal',
		style: {
			fill: 'var(--color-elements-secondary)',
			borderColor: 'var(--color-elements-secondary)',
		},
	},
	name: 'with-icon',
}

export const WithImage: Story = {
	args: {
		imageUrl: 'https://i.postimg.cc/bJF5RB7R/Frame-22.jpg',
		style: {
			fill: 'var(--color-elements-secondary)',
			borderColor: 'var(--color-elements-secondary)',
		},
	},
	name: 'with-image',
}

export const HiddenContent: Story = {
	args: {
		imageUrl: 'https://i.postimg.cc/bJF5RB7R/Frame-22.jpg',
		style: {
			fill: 'var(--color-elements-secondary)',
			borderColor: 'var(--color-elements-secondary)',
		},
		hideContent: true,
	},
	name: 'hidden-content',
}
