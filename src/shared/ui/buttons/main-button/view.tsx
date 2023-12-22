import cn from 'classnames'

import type { ButtonHTMLAttributes, FC } from 'react'

import css from './styles.module.scss'

type TVariant = 'primary' | 'secondary' | 'dark' | 'transparent-light' | 'transparent-dark'

export interface IMainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	// Вариант кнопки
	variant?: TVariant
	shrinkPaddingMobile?: boolean
}

export const MainButton: FC<IMainButtonProps> = ({
	variant = 'primary',
	className,
	shrinkPaddingMobile = false,
	...props
}) => {
	return (
		<button
			className={cn(css.button, className, {
				[css.button_variant_primary]: variant === 'primary',
				[css.button_variant_secondary]: variant === 'secondary',
				[css.button_variant_dark]: variant === 'dark',
				[css.button_variant_transparentLight]: variant === 'transparent-light',
				[css.button_variant_transparentDark]: variant === 'transparent-dark',
				[css.button_padding_shrink]: shrinkPaddingMobile,
			})}
			{...props}
		/>
	)
}
