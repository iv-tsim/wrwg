import cn from 'classnames'

import type { FC, PropsWithChildren } from 'react'

import css from './styles.module.scss'

import { AuthCircleImage } from '@assets/img/auth'

interface ICircleProps extends IWithClassname, PropsWithChildren {}

export const Circle: FC<ICircleProps> = ({ children, className }) => {
	return (
		<div className={cn(css.circle, className)}>
			<img src={AuthCircleImage} alt='circle' className={css.circle__img} />
			{children && <div className={css.circle__content}>{children}</div>}
			<div
				className={cn(
					css.circle__triangle,
					css.circle__triangle_direction_up,
					css.circle__triangle_position_top,
					css.circle__triangle_position_left
				)}
			/>
			<div
				className={cn(
					css.circle__triangle,
					css.circle__triangle_direction_up,
					css.circle__triangle_position_top,
					css.circle__triangle_position_right
				)}
			/>
			<div
				className={cn(
					css.circle__triangle,
					css.circle__triangle_direction_down,
					css.circle__triangle_position_bottom,
					css.circle__triangle_position_left
				)}
			/>
			<div
				className={cn(
					css.circle__triangle,
					css.circle__triangle_direction_down,
					css.circle__triangle_position_bottom,
					css.circle__triangle_position_right
				)}
			/>
		</div>
	)
}
