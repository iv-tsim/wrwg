import { commonApi } from '@/shared/api'
import { useMutation } from '@tanstack/react-query'

interface ILoginRequest {
	username: string
	password: string
}

interface ILoginResponse {
	access: string
}

const loginUser = async (data: ILoginRequest) => {
	const response = await commonApi.post<ILoginResponse>('/token_get/', data, {
		withCredentials: true,
	})
	return response.data
}

export const useLoginUser = () => {
	return useMutation({
		mutationFn: loginUser,
	})
}
