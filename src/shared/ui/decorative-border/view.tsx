import cn from 'classnames'

import type { FC, PropsWithChildren } from 'react'

import css from './styles.module.scss'

import { AuthDecLeftImage, AuthDecRightImage } from '@assets/img/auth'

export interface IDecorativeBorderProps extends PropsWithChildren, IWithClassname {
	position: 'left' | 'right'
}

export const DecorativeBorder: FC<IDecorativeBorderProps> = ({ children, className, position }) => {
	return (
		<div
			className={cn(css.border, className, {
				[css.border_position_left]: position === 'left',
				[css.border_position_right]: position === 'right',
			})}
		>
			<img
				src={position === 'left' ? AuthDecLeftImage : AuthDecRightImage}
				alt='decoration'
				className={css.border__dec}
			/>
			{children && position === 'left' && <div className={css.border__optional}>{children}</div>}
		</div>
	)
}
