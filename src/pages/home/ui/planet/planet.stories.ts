import type { Meta, StoryObj } from '@storybook/react'
import type { IPlanetProps } from './'

import { Planet } from './'

import mercuryUrl from '@assets/img/planets/mercury.png'

const meta: Meta<IPlanetProps> = {
	component: Planet,
	title: 'Pages/home/Planet',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const MainDirectionLeft: Story = {
	args: {
		imageUrl: mercuryUrl,
		to: '#',
		title: 'Меркурий',
		style: {
			maxWidth: '74px',
		},
		mobileTitlePosition: 'right',
	},
	name: 'main',
}
