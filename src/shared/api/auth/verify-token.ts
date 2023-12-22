import { protectedApi } from '../pretected'

export const verifyToken = async () => {
	const response = await protectedApi.get<null>('/token_verify/')
	return response.data
}
