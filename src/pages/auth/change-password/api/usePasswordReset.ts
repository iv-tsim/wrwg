import { commonApi } from '@/shared/api'
import { useMutation } from '@tanstack/react-query'

interface IPasswordResetRequest {
	email: string
}

interface IPasswordResetResponse {
	detail: string
}

const passwordReset = async (data: IPasswordResetRequest) => {
	const response = await commonApi.post<IPasswordResetResponse>(
		'/password_reset/',
		data
	)
	return response.data
}

export const usePasswordReset = () => {
	return useMutation({
		mutationFn: passwordReset,
	})
}
