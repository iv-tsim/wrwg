import type { FC, PropsWithChildren } from 'react'
import cn from 'classnames'

import css from './styles.module.scss'

import circleUrl from '@assets/img/auth/circle.svg'

interface ICircleProps extends IWithClassname, PropsWithChildren {}

export const Circle: FC<ICircleProps> = ({ children, className }) => {
	return (
		<div className={cn(css.circle, className)}>
			<img src={circleUrl} alt='circle' className={css.circle__img} />
			{children && <div className={css.circle__content}>{children}</div>}
			<div
				className={cn(
					css.circle__triangle,
					css.circle__triangle_direction_up,
					css.circle__triangle_position_topLeft
				)}
			/>
			<div
				className={cn(
					css.circle__triangle,
					css.circle__triangle_direction_up,
					css.circle__triangle_position_topRight
				)}
			/>
			<div
				className={cn(
					css.circle__triangle,
					css.circle__triangle_direction_down,
					css.circle__triangle_position_bottomLeft
				)}
			/>
			<div
				className={cn(
					css.circle__triangle,
					css.circle__triangle_direction_down,
					css.circle__triangle_position_bottomRight
				)}
			/>
		</div>
	)
}
