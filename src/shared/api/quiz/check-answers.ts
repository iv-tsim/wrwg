import { protectedApi } from '../pretected'

import type { IQuizClientAnswer } from './check-answer-by-id'

interface IRequest {
	quizId: number
	answers: IQuizClientAnswer[]
}

export type TCheckAnswersStatus = 'fail' | 'success'

interface ICheckAnswersResponse {
	result: TCheckAnswersStatus
	correctAnswerCount: number
}

export const checkAnswers = async (data: IRequest) => {
	const response = await protectedApi.post<ICheckAnswersResponse>(
		`/quizzies/${data.quizId}/check_answers/`,
		{
			answers: data.answers,
		}
	)
	return response.data
}
