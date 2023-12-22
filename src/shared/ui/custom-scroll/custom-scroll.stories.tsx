import { CustomScroll } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const CustomScrollWithContent = () => {
	return (
		<CustomScroll>
			<div
				style={{
					height: '1000px',
				}}
			>
				Много контента (задал высоту в 1000px)
			</div>
		</CustomScroll>
	)
}

const meta: Meta = {
	component: CustomScrollWithContent,
	title: 'UI/custom-scroll',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'default',
}
