import { commonApi } from '@/shared/api'
import { useMutation } from '@tanstack/react-query'

interface IPasswordSetRequest {
	email: string
	newPassword: string
}

interface IPasswordSetResponse {
	detail: string
}

const passwordSet = async (data: IPasswordSetRequest) => {
	const response = await commonApi.post<IPasswordSetResponse>(
		'/password_set/',
		data
	)
	return response.data
}

export const usePasswordSet = () => {
	return useMutation({
		mutationFn: passwordSet,
	})
}
