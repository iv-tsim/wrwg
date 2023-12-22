import cn from 'classnames'

import type { FC } from 'react'

import css from './styles.module.scss'

export interface IDecorativeElementProps extends IWithClassname {
	variant: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
	hideLeft?: boolean
	hideTop?: boolean
	hideTopMobile?: boolean
}

export const DecorativeElement: FC<IDecorativeElementProps> = ({
	variant,
	hideLeft = false,
	hideTop = false,
	hideTopMobile = false,
	className,
}) => {
	return (
		<div
			className={cn(css.border, className, {
				[css.border_variant_topLeft]: variant === 'top-left',
				[css.border_variant_topRight]: variant === 'top-right',
				[css.border_variant_bottomLeft]: variant === 'bottom-left',
				[css.border_variant_bottomRight]: variant === 'bottom-right',
				[css.border_hide_left]: hideLeft,
				[css.border_hide_top]: hideTop,
				[css.border_hideMobile_top]: hideTopMobile,
			})}
		/>
	)
}
