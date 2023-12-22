import { QuestionButton } from '@/shared/ui'
import { Tooltip } from 'react-tooltip'
import { QuizPreview } from '../../preview'

import type { FC } from 'react'
import type { IDefaultDotProps } from '..'
import type { IQuizPreview } from '@/shared/api/quiz'

interface IDesktopDotProps extends IQuizPreview, IWithClassname, IDefaultDotProps {}

export const DesktopDot: FC<IDesktopDotProps> = ({
	description,
	id,
	isAnswered,
	title,
	onClick,
	className,
}) => {
	return (
		<>
			<QuestionButton
				className={className}
				disabled={isAnswered}
				data-tooltip-id={`quiz-${id}`}
				onClick={onClick}
			/>
			<Tooltip
				id={`quiz-${id}`}
				disableStyleInjection={true}
				place='right-end'
				offset={20}
				style={{
					zIndex: 2,
				}}
				opacity={1}
			>
				<QuizPreview description={description} title={title} />
			</Tooltip>
		</>
	)
}
