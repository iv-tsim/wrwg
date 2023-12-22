import cn from 'classnames'

import type { ButtonHTMLAttributes, FC } from 'react'

import css from './styles.module.scss'

export interface IArrowButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
	direction?: 'left' | 'right'
}

export const ArrowButton: FC<IArrowButtonProps> = ({ className, direction = 'left', ...props }) => {
	return (
		<button
			className={cn(css.button, className, {
				[css.button_direction_left]: direction === 'left',
				[css.button_direction_right]: direction === 'right',
			})}
			{...props}
		>
			<svg className={css.button__icon}>
				<use xlinkHref='#arrow-button' />
			</svg>
		</button>
	)
}
