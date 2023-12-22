import cn from 'classnames'

import type { ButtonHTMLAttributes, FC } from 'react'

import css from './styles.module.scss'

export interface IComplicatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ComplicatedButton: FC<IComplicatedButtonProps> = ({
	className,
	children,
	...props
}) => {
	return (
		<button className={cn(css.button, className)} {...props}>
			<div className={css.button__main}>
				<div className={cn(css.button__line, css.button__line_position_left)}></div>

				<div className={css.button__inner}>
					<svg
						className={cn(
							css.button__corner,
							css.button__corner_position_top,
							css.button__corner_position_left
						)}
					>
						<use xlinkHref='#complicated-button-corner' />
					</svg>
					<svg
						className={cn(
							css.button__corner,
							css.button__corner_position_top,
							css.button__corner_position_right,
							css.button__corner_rotate_90
						)}
					>
						<use xlinkHref='#complicated-button-corner' />
					</svg>
					<svg
						className={cn(
							css.button__corner,
							css.button__corner_position_bottom,
							css.button__corner_position_left,
							css.button__corner_rotate_270
						)}
					>
						<use xlinkHref='#complicated-button-corner' />
					</svg>
					<svg
						className={cn(
							css.button__corner,
							css.button__corner_position_bottom,
							css.button__corner_position_right,
							css.button__corner_rotate_180
						)}
					>
						<use xlinkHref='#complicated-button-corner' />
					</svg>
					<span className={cn(css.button__text, css.button__text_position_topLeft)}>0100110</span>
					<span className={cn(css.button__text, css.button__text_position_topRight)}>0110</span>
					<span className={cn(css.button__text, css.button__text_position_bottomLeft)}>
						01 01 01
					</span>
					<span className={cn(css.button__text, css.button__text_position_bottomRight)}>00</span>
					<div className={css.button__content}>{children}</div>
				</div>

				<div className={cn(css.button__line, css.button__line_position_right)}></div>
			</div>
		</button>
	)
}
