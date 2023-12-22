import { IconWithLines } from '../../icons'
import { Stars } from '../../stars'
import { Typography } from '../../typography'
import cn from 'classnames'

import type { FC, HTMLAttributes } from 'react'

import css from './styles.module.scss'

export interface IUserRatingProps extends HTMLAttributes<HTMLDivElement> {
	order_number: number
	userName: string
	userProfileImageUrl?: string
	stars_number: number
	isCurrentUser?: boolean
}

export const UserRating: FC<IUserRatingProps> = ({
	order_number,
	stars_number,
	userName,
	userProfileImageUrl,
	isCurrentUser = false,
	className,
	...props
}) => {
	return (
		<div
			className={cn(css.wrapper, className, {
				[css.wrapper_isCurrentUser]: isCurrentUser,
			})}
			{...props}
		>
			<Typography className={css.wrapper__number} variant='number'>
				{order_number}
			</Typography>
			<div className={css.wrapper__right}>
				<div className={css.wrapper__user}>
					<IconWithLines
						className={css.wrapper__icon}
						iconId='personal-account'
						imageUrl={userProfileImageUrl}
					/>
					<Typography variant='bigfont' className={css.wrapper__userName}>
						@{userName}
					</Typography>
				</div>

				<Stars
					number={stars_number}
					className={css.wrapper__stars}
					size='small'
					isReversed={true}
					isCurrentUser={isCurrentUser}
				/>
			</div>
		</div>
	)
}
