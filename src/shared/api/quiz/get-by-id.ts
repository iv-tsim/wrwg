import { protectedApi } from '../pretected'

interface IResponse {
	id: number
	title: string
	description: string
	planet: number
	createdAt: string
	questions: IQuizQuestionResponse[]
}

interface IQuizQuestionResponse {
	id: number
	title: string
	createdAt: string
	answers: IQuizResponseAnswer[]
}

export interface IQuizResponseAnswer {
	id: number
	title: string
}

export const getById = async (id: number) => {
	const response = await protectedApi.get<IResponse>(`/quizzies/${id}/`)
	return response.data
}
