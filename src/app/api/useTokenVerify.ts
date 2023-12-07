import { protectedApi } from '@/shared/api'
import { useQuery } from '@tanstack/react-query'

const tokenVerify = async () => {
	const response = await protectedApi.get<null>('/token_verify/')
	return response.data
}

export const useTokenVerify = () => {
	return useQuery({
		queryFn: tokenVerify,
		queryKey: ['token_verify'],
		retry: 0,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
	})
}
