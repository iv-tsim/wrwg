import { Typography } from '../typography'
import cn from 'classnames'

import type { FC } from 'react'

import css from './styles.module.scss'

export interface IStarsProps extends IWithClassname {
	number: number
	isReversed?: boolean
	size?: 'default' | 'small'
	disabled?: boolean
	isCurrentUser?: boolean
}

export const Stars: FC<IStarsProps> = ({
	number,
	isReversed = false,
	size = 'default',
	disabled = false,
	isCurrentUser = false,
	className,
}) => {
	return (
		<div
			className={cn(css.stars, className, {
				[css.stars_direction_default]: !isReversed,
				[css.stars_direction_reversed]: isReversed,
				[css.stars_status_default]: !disabled,
				[css.stars_status_isCurrentUser]: isCurrentUser,
				[css.stars_status_disabled]: disabled,
			})}
		>
			<svg className={css.stars__icon}>
				<use xlinkHref='#star' />
			</svg>
			<Typography
				as='span'
				variant={size === 'default' ? 'stars' : 'bigfont'}
				className={css.stars__text}
			>
				{number}
			</Typography>
		</div>
	)
}
