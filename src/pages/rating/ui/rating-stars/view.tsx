import { Stars, Typography, type IStarsProps } from '@/shared/ui'
import cn from 'classnames'

import type { FC } from 'react'

import css from './styles.module.scss'

export interface IRatingStarsProps extends IWithClassname, Pick<IStarsProps, 'disabled'> {
	text: string
	number?: number
}

export const RatingStars: FC<IRatingStarsProps> = ({ number = 0, text, disabled, className }) => {
	return (
		<div className={cn(css.wrapper, className)}>
			<Typography className={css.wrapper__text} variant='bigfont'>
				{text}:
			</Typography>
			<Stars number={number} className={css.wrapper__stars} isReversed={true} disabled={disabled} />
		</div>
	)
}
