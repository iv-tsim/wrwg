import { DecorativeElement } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IDecorativeElementProps } from './'

const meta: Meta<IDecorativeElementProps> = {
	component: DecorativeElement,
	title: 'Pages/mercury/decorative-element',
	tags: ['autodocs'],
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const TopLeft: Story = {
	args: {
		variant: 'top-left',
	},
	name: 'top-left',
}

export const TopRight: Story = {
	args: {
		variant: 'top-right',
	},
	name: 'top-right',
}

export const BottomLeft: Story = {
	args: {
		variant: 'bottom-left',
	},
	name: 'bottom-left',
}

export const BottomRight: Story = {
	args: {
		variant: 'bottom-right',
	},
	name: 'bottom-right',
}
