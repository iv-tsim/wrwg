import type { FC } from 'react'
import type { TDefaultButtonProps } from '@/shared/model'
import cn from 'classnames'

import css from './styles.module.scss'

type TVariant = 'primary' | 'secondary' | 'dark' | 'transparent'

export interface IMainButtonProps extends TDefaultButtonProps {
	// Вариант кнопки
	variant?: TVariant
}

export const MainButton: FC<IMainButtonProps> = ({
	variant = 'primary',
	className,
	...props
}) => {
	return (
		<button
			className={cn(css.button, className, {
				[css.button_variant_primary]: variant === 'primary',
				[css.button_variant_secondary]: variant === 'secondary',
				[css.button_variant_dark]: variant === 'dark',
				[css.button_variant_transparent]: variant === 'transparent',
			})}
			{...props}
		/>
	)
}

