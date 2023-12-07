import { FC, PropsWithChildren } from 'react'
import cn from 'classnames'

import css from './styles.module.scss'

import decLeftUrl from '@assets/img/auth/dec_left.svg'
import decRightUrl from '@assets/img/auth/dec_right.svg'

export interface IDecorativeBorderProps
	extends PropsWithChildren,
		IWithClassname {
	position: 'left' | 'right'
}

export const DecorativeBorder: FC<IDecorativeBorderProps> = ({
	children,
	className,
	position,
}) => {
	return (
		<div
			className={cn(css.border, className, {
				[css.border_position_left]: position === 'left',
				[css.border_position_right]: position === 'right',
			})}
		>
			<img
				src={position === 'left' ? decLeftUrl : decRightUrl}
				alt='decoration'
				className={css.border__dec}
			/>
			{children && position === 'left' && (
				<div className={css.border__optional}>{children}</div>
			)}
		</div>
	)
}
