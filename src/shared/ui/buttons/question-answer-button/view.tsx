import { Typography } from '../../typography'
import cn from 'classnames'

import type { ButtonHTMLAttributes, FC } from 'react'

import css from './styles.module.scss'

export interface IQuizAnswerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isCorrect?: boolean
	isWrong?: boolean
}

export const QuestionAnswerButton: FC<IQuizAnswerProps> = ({
	isCorrect = false,
	isWrong = false,
	children,
	...props
}) => {
	return (
		<button
			className={cn(css.button, {
				[css.button_status_correct]: isCorrect,
				[css.button_status_wrong]: isWrong,
			})}
			{...props}
		>
			<Typography as='span' variant='text' className={css.button__text}>
				{children}
			</Typography>
		</button>
	)
}
