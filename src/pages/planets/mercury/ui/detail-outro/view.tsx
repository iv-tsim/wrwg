import { DecorativeElement } from '../decorative-element'
import { AddRating, Loading, MainButton, Typography } from '@/shared/ui'
import { useQuizStore } from '../../model'
import { useEffect } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/shared/api'
import { GET_QUIZZIES_KEY } from '@/shared/config'
import cn from 'classnames'

import css from './styles.module.scss'

export const DetailOutro = () => {
	const quizId = useQuizStore(state => state.openedDetailId)
	const answers = useQuizStore(state => state.answers)
	const reset = useQuizStore(state => state.reset)

	const queryClient = useQueryClient()

	const checkAnswersMutation = useMutation({
		mutationFn: api.quiz.checkAnswers,
		onSettled: async () => {
			await queryClient.invalidateQueries({
				queryKey: GET_QUIZZIES_KEY,
			})
		},
	})

	useEffect(() => {
		if (
			checkAnswersMutation.isPending ||
			checkAnswersMutation.isSuccess ||
			checkAnswersMutation.isError
		)
			return

		checkAnswersMutation.mutate({
			quizId,
			answers,
		})
	}, [answers, checkAnswersMutation, quizId])

	return (
		<div className={css.wrapper}>
			<div className={css.wrapper__main}>
				{checkAnswersMutation.isPending ? (
					<Loading />
				) : (
					<>
						<div className={css.wrapper__top}>
							<Typography variant='h1' className={css.wrapper__title}>
								{checkAnswersMutation.data?.result === 'success'
									? 'викторина пройдена успешно'
									: 'викторина не пройдена'}
							</Typography>
							<Typography
								variant='h2'
								className={cn(css.wrapper__count, {
									[css.wrapper__count_status_success]:
										checkAnswersMutation.data?.result === 'success',
									[css.wrapper__count_status_error]: checkAnswersMutation.data?.result === 'fail',
								})}
							>
								Правильных ответов: {checkAnswersMutation.data?.correctAnswerCount}/{answers.length}
							</Typography>
							{checkAnswersMutation.data?.result === 'success' && (
								<AddRating number={1} className={css.wrapper__add} />
							)}
						</div>
						<MainButton variant='secondary' onClick={reset} className={css.wrapper__button}>
							к другим викторинам
						</MainButton>
					</>
				)}
			</div>
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
	)
}
