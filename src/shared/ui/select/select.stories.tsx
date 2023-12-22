import { useState } from 'react'
import { Select } from './'

import type { Meta, StoryObj } from '@storybook/react'
import type { ISelectProps } from './'
import type { FC } from 'react'

const options = [
	{
		label: 'по количеству звезд',
		value: 1,
	},
	{
		label: 'по убыванию звезд',
		value: 2,
	},
	{
		label: 'по пользователю (a-z)',
		value: 3,
	},
	{
		label: 'по пользователю (Z-A)',
		value: 4,
	},
]

interface ISelectWithStateProps extends Pick<ISelectProps<number>, 'disabled'> {}

const SelectWithState: FC<ISelectWithStateProps> = ({ ...props }) => {
	const [value, setValue] = useState(options[0])

	return (
		<Select<number>
			onChange={value => setValue(value)}
			value={value}
			options={options}
			{...props}
		/>
	)
}

const meta: Meta<ISelectWithStateProps> = {
	component: SelectWithState,
	title: 'UI/select',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'default',
}

export const Disabled: Story = {
	args: {
		disabled: true,
	},
	name: 'disabled',
}
