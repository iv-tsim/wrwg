import type { FC } from 'react'
import type { TDefaultButtonProps } from '@/shared/model'
import cn from 'classnames'

import css from './styles.module.scss'

import cornerUrl from '@assets/img/button/complicated-button-corner.svg'

export interface IComplicatedButtonProps extends TDefaultButtonProps {}

export const ComplicatedButton: FC<IComplicatedButtonProps> = ({
	className,
	children,
	...props
}) => {
	return (
		<button className={cn(css.button, className)} {...props}>
			<div className={css.button__main}>
				<div
					className={cn(css.button__line, css.button__line_position_left)}
				></div>

				<div className={css.button__inner}>
					<img
						src={cornerUrl}
						alt='corner'
						className={cn(
							css.button__corner,
							css.button__corner_position_topLeft
						)}
					/>
					<img
						src={cornerUrl}
						alt='corner'
						className={cn(
							css.button__corner,
							css.button__corner_position_topRight
						)}
					/>
					<img
						src={cornerUrl}
						alt='corner'
						className={cn(
							css.button__corner,
							css.button__corner_position_bottomLeft
						)}
					/>
					<img
						src={cornerUrl}
						alt='corner'
						className={cn(
							css.button__corner,
							css.button__corner_position_bottomRight
						)}
					/>
					<span
						className={cn(css.button__text, css.button__text_position_topLeft)}
					>
						0100110
					</span>
					<span
						className={cn(css.button__text, css.button__text_position_topRight)}
					>
						0110
					</span>
					<span
						className={cn(
							css.button__text,
							css.button__text_position_bottomLeft
						)}
					>
						01 01 01
					</span>
					<span
						className={cn(
							css.button__text,
							css.button__text_position_bottomRight
						)}
					>
						00
					</span>
					<div className={css.button__content}>{children}</div>
				</div>

				<div
					className={cn(css.button__line, css.button__line_position_right)}
				></div>
			</div>
		</button>
	)
}

