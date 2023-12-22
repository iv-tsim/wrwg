import { protectedApi } from '../pretected'

export interface IQuizClientAnswer {
	questionId: number
	answerId: number
}

interface IRequest {
	quizId: number
	data: IQuizClientAnswer
}

export type TCheckAnswerByIdStatus = 'fail' | 'success'

interface IResponse {
	result: 'fail' | 'success'
	correctAnswerId: number
}

export const checkAnswerById = async (data: IRequest) => {
	const response = await protectedApi.post<IResponse>(
		`/quizzies/${data.quizId}/check_answer/`,
		data.data
	)
	return response.data
}
