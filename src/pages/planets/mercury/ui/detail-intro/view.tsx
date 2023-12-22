import { MainButton, Typography } from '@/shared/ui'
import { DecorativeElement } from '../decorative-element'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { GET_QUIZZIES_KEY } from '@/shared/config'
import { useQuizStore } from '../../model'
import { api } from '@/shared/api'
import cn from 'classnames'

import type { FC } from 'react'

import css from './styles.module.scss'

interface IDetailIntroProps {
	text: string
	onBtnClick: VoidFunction
}

export const DetailIntro: FC<IDetailIntroProps> = ({ onBtnClick, text }) => {
	const quizId = useQuizStore(state => state.openedDetailId)
	const [step, setStep] = useState<'button' | 'confirm'>('button')

	const queryClient = useQueryClient()

	const startQuizMutation = useMutation({
		mutationFn: api.quiz.start,
		onSuccess: onBtnClick,
		onSettled: async () => {
			await queryClient.invalidateQueries({
				queryKey: GET_QUIZZIES_KEY,
			})
		},
	})

	const handleStartBtnClick = () => {
		startQuizMutation.mutate(quizId)
	}

	const render = () => {
		if (step === 'button') {
			return (
				<MainButton
					variant='secondary'
					onClick={() => setStep('confirm')}
					className={css.wrapper__button}
				>
					Старт
				</MainButton>
			)
		}

		if (step === 'confirm') {
			return (
				<div className={css.wrapper__confirm}>
					<Typography variant='h2' className={css.wrapper__title}>
						Вы уверены, что готовы начать викторину?
					</Typography>
					<Typography variant='boldText' className={css.wrapper__rules}>
						Викторину можно пройти только один раз, на каждый вопрос дается 30 секунд. Если вы
						начали проходить викторину, то нельзя покидать, закрывать и обновлять страницу, иначе
						викторина автоматически не засчитается.
					</Typography>
					<div className={css.wrapper__buttons}>
						<MainButton
							variant='transparent-dark'
							shrinkPaddingMobile={true}
							className={css.wrapper__cancel}
							onClick={() => setStep('button')}
						>
							Отмена
						</MainButton>
						<MainButton
							variant='secondary'
							shrinkPaddingMobile={true}
							className={css.wrapper__start}
							onClick={handleStartBtnClick}
						>
							Начать
						</MainButton>
					</div>
				</div>
			)
		}
	}

	return (
		<div className={css.wrapper}>
			<div className={css.wrapper__textWrapper}>
				<Typography className={css.wrapper__text} variant='text'>
					{text}
				</Typography>
				<DecorativeElement
					variant='top-left'
					hideTop={true}
					className={cn(
						css.wrapper__dec,
						css.wrapper__dec_position_top,
						css.wrapper__dec_position_left
					)}
				/>
				<DecorativeElement
					variant='top-right'
					hideTop={true}
					className={cn(
						css.wrapper__dec,
						css.wrapper__dec_position_top,
						css.wrapper__dec_position_right
					)}
				/>
				<DecorativeElement
					variant='bottom-left'
					className={cn(
						css.wrapper__dec,
						css.wrapper__dec_position_bottom,
						css.wrapper__dec_position_left
					)}
				/>
				<DecorativeElement
					variant='bottom-right'
					className={cn(
						css.wrapper__dec,
						css.wrapper__dec_position_bottom,
						css.wrapper__dec_position_right
					)}
				/>
			</div>
			<div className={css.wrapper__main}>
				<div className={css.wrapper__content}>{render()}</div>
				<DecorativeElement
					variant='top-left'
					hideTop={true}
					className={cn(
						css.wrapper__dec,
						css.wrapper__dec_position_top,
						css.wrapper__dec_position_left
					)}
				/>
				<DecorativeElement
					variant='top-right'
					hideTop={true}
					className={cn(
						css.wrapper__dec,
						css.wrapper__dec_position_top,
						css.wrapper__dec_position_right
					)}
				/>
				<DecorativeElement
					variant='bottom-left'
					className={cn(
						css.wrapper__dec,
						css.wrapper__dec_position_bottom,
						css.wrapper__dec_position_left
					)}
				/>
				<DecorativeElement
					variant='bottom-right'
					className={cn(
						css.wrapper__dec,
						css.wrapper__dec_position_bottom,
						css.wrapper__dec_position_right
					)}
				/>
			</div>
		</div>
	)
}
