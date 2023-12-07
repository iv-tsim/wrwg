import type { TDefaultButtonProps } from '@/shared/model'
import type { FC } from 'react'
import cn from 'classnames'

import css from './styles.module.scss'

export interface ICloseButtonProps
	extends Omit<TDefaultButtonProps, 'children'> {
	variant: 'dark' | 'light'
}

export const CloseButton: FC<ICloseButtonProps> = ({
	className,
	variant = 'light',
	...props
}) => {
	return (
		<button
			className={cn(css.button, className, {
				[css.button_variant_light]: variant === 'light',
				[css.button_variant_dark]: variant === 'dark',
			})}
			{...props}
		>
			<div
				className={cn(
					css.button__line,
					css.button__line_position_top,
					css.button__line_orientation_horizontal
				)}
			/>
			<div
				className={cn(
					css.button__line,
					css.button__line_position_right,
					css.button__line_orientation_vertical
				)}
			/>
			<div
				className={cn(
					css.button__line,
					css.button__line_position_bottom,
					css.button__line_orientation_horizontal
				)}
			/>
			<div
				className={cn(
					css.button__line,
					css.button__line_position_left,
					css.button__line_orientation_vertical
				)}
			/>
			<div className={css.button__circle}>
				<svg className={css.button__icon}>
					<use xlinkHref='#close-button' />
				</svg>
			</div>
		</button>
	)
}
