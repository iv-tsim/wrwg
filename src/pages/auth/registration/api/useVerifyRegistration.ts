import { commonApi } from '@/shared/api'
import { useMutation } from '@tanstack/react-query'

interface IVerifyRequest {
	email: string
	code: string
}

interface IVerifyResponse {
	detail: string
}

const verifyUser = async (data: IVerifyRequest) => {
	const response = await commonApi.post<IVerifyResponse>('/user_verify/', data)
	return response.data
}

export const useVerifyUser = () => {
	return useMutation({
		mutationFn: verifyUser,
	})
}
