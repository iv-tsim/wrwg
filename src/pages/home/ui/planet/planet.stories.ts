import { Planet } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IPlanetProps } from './'

import { PlanetMercuryImage } from '@assets/img/planets'

const meta: Meta<IPlanetProps> = {
	component: Planet,
	title: 'Pages/home/planet',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		imageUrl: PlanetMercuryImage,
		to: '#',
		title: 'Меркурий',
		style: {
			maxWidth: '74px',
		},
		mobileTitlePosition: 'right',
	},
	name: 'default',
}
