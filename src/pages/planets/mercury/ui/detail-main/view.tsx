import { Loading } from '@/shared/ui'
import { useQuizStore } from '../../model'
import { DetailModal } from '../detail-modal'
import { useEffect, useState } from 'react'
import { DetailIntro } from '../detail-intro'
import { DetailQuestion } from '../detail-question'
import { DetailOutro } from '../detail-outro'
import { useQuery } from '@tanstack/react-query'
import { api, callErrorToast } from '@/shared/api'
import { GET_QUIZ_BY_ID_KEY } from '@/shared/config'

export const DetailMain = () => {
	const quizId = useQuizStore(state => state.openedDetailId)
	const answers = useQuizStore(state => state.answers)
	const addAnswer = useQuizStore(state => state.addAnswer)
	const reset = useQuizStore(state => state.reset)

	const [step, setStep] = useState<'intro' | 'question' | 'outro'>('intro')
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)

	const { data, isLoading, isError, error } = useQuery({
		queryKey: GET_QUIZ_BY_ID_KEY(quizId),
		queryFn: () => api.quiz.getById(quizId),
	})

	const currentQuestion = data?.questions[currentQuestionIndex]

	useEffect(() => {
		if (!data) return

		if (answers.length && currentQuestionIndex === data.questions.length) {
			setStep('outro')
		}
	}, [currentQuestionIndex, data, answers])

	const render = () => {
		if (step === 'intro') {
			return (
				<DetailIntro
					text={data!.description}
					onBtnClick={() => data?.questions.length && setStep('question')}
				/>
			)
		}

		if (step === 'question' && currentQuestion) {
			return (
				<DetailQuestion
					answers={currentQuestion.answers}
					currentIndex={currentQuestionIndex}
					id={currentQuestion.id}
					onAnswer={answerId => {
						addAnswer({
							answerId,
							questionId: currentQuestion!.id,
						})
						setCurrentQuestionIndex(prev => prev + 1)
					}}
					title={currentQuestion.title}
					totalQuestionQuantity={data.questions.length}
				/>
			)
		}

		if (step === 'outro') {
			return <DetailOutro />
		}
	}

	if (isError) {
		callErrorToast(error)
		reset()
	}

	return (
		<DetailModal title={data?.title || 'Загрузка...'}>
			{isLoading || !data ? <Loading /> : render()}
		</DetailModal>
	)
}
