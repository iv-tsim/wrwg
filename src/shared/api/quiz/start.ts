import { protectedApi } from '../pretected'

export const start = async (id: number) => {
	const response = await protectedApi.post(`/quizzies/${id}/start/`)
	return response.data
}
