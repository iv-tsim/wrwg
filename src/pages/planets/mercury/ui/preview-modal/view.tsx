import { Portal } from '@/shared/hocs'
import { QuizPreview } from '../preview/view'
import { CloseButton, MainButton } from '@/shared/ui'

import type { IQuizPreview } from '@/shared/api/quiz'
import type { IDefaultDotProps } from '../dot'
import type { FC } from 'react'

import css from './styles.module.scss'

interface IPreviewModalProps extends IQuizPreview, IDefaultDotProps {
	onClose: VoidFunction
}

export const PreviewModal: FC<IPreviewModalProps> = ({ onClick, onClose, ...props }) => {
	const handleButtonClick = () => {
		onClick()
		onClose()
	}

	return (
		<Portal>
			{/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
			<div className={css.wrapper}>
				<div className={css.overlay} onClick={onClose} />
				<div className={css.content}>
					<QuizPreview {...props} className={css.content__preview} />
					<CloseButton variant='light' className={css.content__close} onClick={onClose} />
					<MainButton onClick={handleButtonClick} className={css.content__button}>
						Начать
					</MainButton>
				</div>
			</div>
		</Portal>
	)
}
