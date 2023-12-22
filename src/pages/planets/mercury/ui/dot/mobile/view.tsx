import { useState } from 'react'
import { QuestionButton } from '@/shared/ui'
import { PreviewModal } from '../../preview-modal/view'

import type { FC } from 'react'
import type { IDefaultDotProps } from '..'
import type { IQuizPreview } from '@/shared/api/quiz'

interface IMobileDotProps extends IQuizPreview, IWithClassname, IDefaultDotProps {}

export const MobileDot: FC<IMobileDotProps> = ({ className, ...props }) => {
	const [isModalOpened, setIsModalOpened] = useState<boolean>(false)

	return (
		<>
			<QuestionButton
				className={className}
				disabled={props.isAnswered}
				onClick={() => setIsModalOpened(true)}
			/>
			{isModalOpened && <PreviewModal onClose={() => setIsModalOpened(false)} {...props} />}
		</>
	)
}
