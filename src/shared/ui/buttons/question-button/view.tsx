import cn from 'classnames'

import type { ButtonHTMLAttributes, FC } from 'react'

import css from './styles.module.scss'

export interface IQuestionButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}

export const QuestionButton: FC<IQuestionButtonProps> = ({ className, ...props }) => {
	return <button {...props} className={cn(css.button, className)} />
}
