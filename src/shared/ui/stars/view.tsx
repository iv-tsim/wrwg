import { FC } from 'react'
import cn from 'classnames'

import css from './styles.module.scss'
import { Typography } from '../typography'

export interface IStarsProps extends IWithClassname {
	number: number
	isReversed?: boolean
}

export const Stars: FC<IStarsProps> = ({
	number,
	isReversed = false,
	className,
}) => {
	return (
		<div
			className={cn(css.stars, className, {
				[css.stars_direction_default]: !isReversed,
				[css.stars_direction_reversed]: isReversed,
			})}
		>
			<svg className={css.stars__icon}>
				<use xlinkHref='#star' />
			</svg>
			<Typography as='span' variant='stars' className={css.stars__text}>
				{number}
			</Typography>
		</div>
	)
}
