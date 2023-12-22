import { Typography } from '../../typography'
import { IconWithLines, type IIconWithLinesProps } from '../../icons'
import cn from 'classnames'

import type { ButtonHTMLAttributes, FC } from 'react'

import css from './styles.module.scss'

export interface IconButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		Pick<IIconWithLinesProps, 'hideContent'> {
	iconId?: string
	imageUrl?: string
	isReversed?: boolean
}

export const IconButton: FC<IconButtonProps> = ({
	iconId,
	imageUrl,
	className,
	children,
	isReversed = false,
	hideContent,
	...props
}) => {
	return (
		<button
			className={cn(css.button, className, {
				[css.button_direction_default]: !isReversed,
				[css.button_direction_reversed]: isReversed,
			})}
			{...props}
		>
			<IconWithLines
				iconId={iconId}
				imageUrl={imageUrl}
				className={css.button__img}
				hideContent={hideContent}
			/>
			<Typography as='span' variant='menu' className={css.button__text}>
				{children}
			</Typography>
		</button>
	)
}
