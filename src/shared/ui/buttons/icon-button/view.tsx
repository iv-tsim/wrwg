import { TDefaultButtonProps } from '@/shared/model'
import { FC } from 'react'
import cn from 'classnames'

import css from './styles.module.scss'
import { Typography } from '../../typography'

export interface IconButtonProps extends TDefaultButtonProps {
	iconId?: string
	imageUrl?: string
	isReversed?: boolean
}

export const IconButton: FC<IconButtonProps> = ({
	iconId,
	imageUrl,
	className,
	children,
	isReversed = false,
	...props
}) => {
	return (
		<button
			className={cn(css.button, className, {
				[css.button_direction_default]: !isReversed,
				[css.button_direction_reversed]: isReversed,
				[css.button_icon_with]: iconId,
				[css.button_icon_without]: imageUrl,
			})}
			{...props}
		>
			<div className={css.button__icon}>
				{iconId && (
					<svg className={css.button__img}>
						<use xlinkHref={`#${iconId}`} />
					</svg>
				)}
				{imageUrl && <img src={imageUrl} className={css.button__img} />}
				<span
					className={cn(
						css.button__line,
						css.button__line_orientation_horizontal,
						css.button__line_position_top
					)}
				/>
				<span
					className={cn(
						css.button__line,
						css.button__line_orientation_horizontal,
						css.button__line_position_bottom
					)}
				/>
				<span
					className={cn(
						css.button__line,
						css.button__line_orientation_vertical,
						css.button__line_position_left
					)}
				/>
				<span
					className={cn(
						css.button__line,
						css.button__line_orientation_vertical,
						css.button__line_position_right
					)}
				/>
			</div>
			<Typography as='span' variant='menu' className={css.button__text}>
				{children}
			</Typography>
		</button>
	)
}
