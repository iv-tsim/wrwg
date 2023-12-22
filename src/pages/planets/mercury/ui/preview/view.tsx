import { Typography } from '@/shared/ui'
import cn from 'classnames'

import type { FC } from 'react'

import css from './styles.module.scss'

import { PreviewImage } from '@/shared/assets/img/mercury'

export interface IQuizPreviewProps extends IWithClassname {
	title: string
	description: string
}

export const QuizPreview: FC<IQuizPreviewProps> = ({ description, title, className }) => {
	return (
		<div className={cn(css.preview, className)}>
			<div className={css.preview__top}>
				<Typography variant='shipname' className={css.preview__title}>
					{title}
				</Typography>
				<Typography variant='text' className={css.preview__description}>
					{description}
				</Typography>
			</div>
			<img src={PreviewImage} alt={title} className={css.preview__image} />
		</div>
	)
}
