import type { Meta, StoryObj } from '@storybook/react'
import type { ITypographyProps } from './'

import { Typography } from './'

const meta: Meta<ITypographyProps> = {
	component: Typography,
	title: 'UI/Typography',
	tags: ['autodocs'],
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const H1: Story = {
	args: {
		variant: 'h1',
		children: 'h1 Lorem, ipsum dolor.',
	},
	name: 'h1',
}

export const H1_2: Story = {
	args: {
		variant: 'h1-2',
		children: 'h1-2 Lorem, ipsum dolor.',
	},
	name: 'h1-2',
}

export const H2: Story = {
	args: {
		variant: 'h2',
		children: 'h2 Lorem, ipsum dolor.',
	},
	name: 'h2',
}

export const Bigfont: Story = {
	args: {
		variant: 'bigfont',
		children: 'bigfont Lorem, ipsum dolor.',
	},
	name: 'bigfont',
}

export const Menuitem: Story = {
	args: {
		variant: 'menuitem',
		children: 'menuitem Lorem, ipsum dolor.',
	},
	name: 'menuitem',
}

export const Menu: Story = {
	args: {
		variant: 'menu',
		children: 'menu Lorem, ipsum dolor.',
	},
	name: 'menu',
}

export const BoldText: Story = {
	args: {
		variant: 'boldText',
		children: 'boldText Lorem, ipsum dolor.',
	},
	name: 'boldText',
}

export const SmallText: Story = {
	args: {
		variant: 'smallText',
		children: 'smallText Lorem, ipsum dolor.',
	},
	name: 'smallText',
}

export const Desc: Story = {
	args: {
		variant: 'desc',
		children: 'desc Lorem, ipsum dolor.',
	},
	name: 'desc',
}

export const Timer: Story = {
	args: {
		variant: 'timer',
		children: 'timer Lorem, ipsum dolor.',
	},
	name: 'timer',
}

export const Shipname: Story = {
	args: {
		variant: 'shipname',
		children: 'shipname Lorem, ipsum dolor.',
	},
	name: 'shipname',
}

export const Stars: Story = {
	args: {
		variant: 'stars',
		children: 'stars Lorem, ipsum dolor.',
	},
	name: 'stars',
}

export const Number: Story = {
	args: {
		variant: 'number',
		children: 'number Lorem, ipsum dolor.',
	},
	name: 'number',
}

export const Bigplanetname: Story = {
	args: {
		variant: 'bigplanetname',
		children: 'bigplanetname Lorem, ipsum dolor.',
	},
	name: 'bigplanetname',
}

export const Likes: Story = {
	args: {
		variant: 'likes',
		children: 'likes Lorem, ipsum dolor.',
	},
	name: 'likes',
}

export const User: Story = {
	args: {
		variant: 'user',
		children: 'user Lorem, ipsum dolor.',
	},
	name: 'user',
}
