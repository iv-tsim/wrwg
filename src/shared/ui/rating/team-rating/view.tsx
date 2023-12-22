import cn from 'classnames'

import type { FC, HTMLAttributes } from 'react'

import css from './styles.module.scss'
import { Typography } from '../../typography'
import { Stars } from '../../stars'

export interface ITeamRatingProps extends HTMLAttributes<HTMLDivElement> {
	order_number: number
	stars_number: number
	teamName: string
}

export const TeamRating: FC<ITeamRatingProps> = ({
	order_number,
	stars_number,
	teamName,
	className,
	...props
}) => {
	return (
		<div className={cn(css.wrapper, className)} {...props}>
			<Typography className={css.wrapper__order} variant='number'>
				{order_number}
			</Typography>
			<div className={css.wrapper__right}>
				<Typography className={css.wrapper__name} variant='bigfont'>
					команда «{teamName}»
				</Typography>
				<Stars
					number={stars_number}
					size='small'
					isReversed={true}
					className={css.wrapper__stars}
				/>
			</div>
		</div>
	)
}
