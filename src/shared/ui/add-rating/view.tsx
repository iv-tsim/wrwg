import cn from 'classnames'

import css from './styles.module.scss'

import type { FC } from 'react'
import { Typography } from '../typography'

export interface IAddRatingProps extends IWithClassname {
	size?: 'default' | 'small'
	number: number
}

export const AddRating: FC<IAddRatingProps> = ({ number, size = 'default', className }) => {
	return (
		<div
			className={cn(css.rating, className, {
				[css.rating_size_default]: size === 'default',
				[css.rating_size_small]: size === 'small',
			})}
		>
			<svg className={css.rating__icon}>
				<use xlinkHref='#add-rating' />
			</svg>
			<Typography variant={size === 'default' ? 'likes' : 'desc'} className={css.rating__text}>
				+{number}
			</Typography>
		</div>
	)
}
