import { Typography } from '@/shared/ui'
import cn from 'classnames'

import type { FC } from 'react'

import css from './styles.module.scss'

interface ITeamProps extends IWithClassname {
	image: string
	name: string
	isBig: boolean
}

export const Team: FC<ITeamProps> = ({ image, isBig, name, className }) => {
	return (
		<div
			className={cn(css.team, className, {
				[css.team_size_big]: isBig,
			})}
		>
			<img src={image} alt={name} className={css.team__img} />
			<Typography variant='shipname' className={css.team__name}>
				{name}
			</Typography>
		</div>
	)
}
