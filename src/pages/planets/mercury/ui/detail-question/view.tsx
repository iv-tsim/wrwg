import { DecorativeElement } from '../decorative-element'
import { QuestionTimer } from '@/features/timers'
import { QuestionAnswerButton, Typography } from '@/shared/ui'
import { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { useQuizStore } from '../../model'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/shared/api'
import cn from 'classnames'

import type { FC } from 'react'
import type { IQuestionTimerRef } from '@/features/timers'
import type { IQuizResponseAnswer, TCheckAnswerByIdStatus } from '@/shared/api/quiz'

import css from './styles.module.scss'

interface IDetailQuestionProps {
	totalQuestionQuantity: number
	currentIndex: number
	onAnswer: (answerId: number) => void
	title: string
	answers: IQuizResponseAnswer[]
	id: number
}

export const DetailQuestion: FC<IDetailQuestionProps> = ({
	currentIndex,
	onAnswer,
	id,
	answers,
	title,
	totalQuestionQuantity,
}) => {
	const quizId = useQuizStore(state => state.openedDetailId)
	const [canAnswer, setCanAnswer] = useState<boolean>(true)

	const timerRef = useRef<IQuestionTimerRef>(null)
	const [clickedAnswerId, setClickedAnswerId] = useState<number>(0)
	const [clickedAnswerIdStatus, setClickAnswerIdStatus] = useState<TCheckAnswerByIdStatus | null>(
		null
	)

	const checkAnswerMutation = useMutation({
		mutationFn: api.quiz.checkAnswerById,
		onSuccess: (response, variables) => {
			setClickAnswerIdStatus(response.result)

			setTimeout(() => {
				setCanAnswer(true)
				setClickedAnswerId(0)
				setClickAnswerIdStatus(null)
				timerRef.current?.restart()
				onAnswer(variables.data.answerId)
			}, 2000)
		},
	})

	const handleAnswerClick = async (answerId: number) => {
		if (clickedAnswerId) return

		setClickedAnswerId(answerId)

		checkAnswerMutation.mutate({
			data: {
				answerId,
				questionId: id,
			},
			quizId,
		})
	}

	return (
		<div className={css.wrapper}>
			<div className={css.wrapper__top}>
				<div className={css.wrapper__timerWrapper}>
					<QuestionTimer
						className={css.wrapper__timer}
						ref={timerRef}
						duration={30}
						onComplete={() => {
							if (clickedAnswerId) return

							setCanAnswer(false)
							handleAnswerClick(0)
							toast.info('Вы не успели ответить на вопрос. Ответ будет засчитан как "неправильный"')
						}}
					/>
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
						hideTopMobile={true}
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
				<div className={css.wrapper__questionWrapper}>
					<div className={css.wrapper__questionInner}>
						<Typography variant='boldText' className={css.wrapper__question}>
							{title}
						</Typography>
						<Typography variant='user' className={css.wrapper__questionCount}>
							{currentIndex + 1}/{totalQuestionQuantity}
						</Typography>
					</div>
					<DecorativeElement
						variant='top-left'
						hideLeft={true}
						hideTopMobile={true}
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
						hideLeft={true}
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
			<div className={css.wrapper__bottom}>
				{answers.map(answer => (
					<QuestionAnswerButton
						key={answer.id}
						isWrong={clickedAnswerId === answer.id && clickedAnswerIdStatus === 'fail'}
						isCorrect={
							(clickedAnswerId === answer.id && clickedAnswerIdStatus === 'success') ||
							checkAnswerMutation.data?.correctAnswerId === answer.id
						}
						onClick={() => {
							if (!canAnswer) return

							handleAnswerClick(answer.id)
						}}
					>
						{answer.title}
					</QuestionAnswerButton>
				))}
			</div>
		</div>
	)
}
