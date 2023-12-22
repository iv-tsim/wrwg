import { protectedApi } from '../pretected'

export interface IQuizPreview {
	id: number
	title: string
	description: string
	isAnswered: boolean
	planet: number
	createdAt: string
}

export const getAll = async () => {
	const response = await protectedApi.get<IQuizPreview[]>('/quizzies/', {
		params: {
			planet: 1,
		},
	})
	return response.data
}
