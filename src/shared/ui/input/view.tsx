import type { TDefaultInputProps } from '@/shared/model'
import { Typography } from '@/shared/ui'
import { forwardRef } from 'react'
import cn from 'classnames'

import css from './styles.module.scss'

export interface IInputProps extends TDefaultInputProps {
	variant?: 'dark' | 'light'
	textAlign?: 'center' | 'left'
	error?: string
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
	(
		{ variant = 'dark', textAlign = 'center', error, className, ...props },
		inputRef
	) => {
		return (
			<div
				className={cn(css.wrapper, className, {
					[css.wrapper_variant_dark]: variant === 'dark',
					[css.wrapper_variant_light]: variant === 'light',
					[css.wrapper_textAlign_center]: textAlign === 'center',
					[css.wrapper_textAlign_left]: textAlign === 'left',
					[css.wrapper_status_invalid]: error,
				})}
			>
				<input
					type='text'
					className={css.wrapper__input}
					ref={inputRef}
					{...props}
				/>
				<Typography className={css.wrapper__error} variant='desc'>
					{error}
				</Typography>
			</div>
		)
	}
)

Input.displayName = 'Input'
