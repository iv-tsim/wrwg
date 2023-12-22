import { Planet } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { IPlanetProps } from './'
import { PlanetMercuryImage } from '@/shared/assets/img/planets'

const meta: Meta<IPlanetProps> = {
	component: Planet,
	title: 'UI/planet',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		planetImg: PlanetMercuryImage,
		planetName: 'Меркурий',
	},
	name: 'default',
}
