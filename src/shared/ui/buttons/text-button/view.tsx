import { Typography } from '@/shared/ui'
import cn from 'classnames'

import type { ButtonHTMLAttributes, FC } from 'react'

import css from './styles.module.scss'

export interface ITextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	iconId?: string
}

export const TextButton: FC<ITextButtonProps> = ({ iconId, className, children, ...props }) => {
	return (
		<button className={cn(css.button, className)} {...props}>
			{iconId && (
				<svg className={css.button__icon}>
					<use xlinkHref={`#${iconId}`} />
				</svg>
			)}
			<Typography as='span' variant='desc' className={css.button__text}>
				{children}
			</Typography>
		</button>
	)
}
