import { commonApi } from '@/shared/api'
import { useMutation } from '@tanstack/react-query'

export interface IRegisterRequest {
	username: string
	email: string
	password: string
	fullName: string
	team: number
}

interface IRegisterResponse {
	detail: string
}

const registerUser = async (data: IRegisterRequest) => {
	const response = await commonApi.post<IRegisterResponse>(
		'/user_register/',
		data
	)
	return response.data
}

export const useRegisterUser = () => {
	return useMutation({
		mutationFn: registerUser,
	})
}
