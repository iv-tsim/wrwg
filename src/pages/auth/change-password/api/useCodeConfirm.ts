import { commonApi } from '@/shared/api'
import { useMutation } from '@tanstack/react-query'

interface ICodeConfirmRequest {
	email: string
	code: string
}

interface ICodeConfirmResponse {
	detail: string
}

const codeConfirm = async (data: ICodeConfirmRequest) => {
	const response = await commonApi.post<ICodeConfirmResponse>(
		'/code_confirm/',
		data
	)
	return response.data
}

export const useCodeConfirm = () => {
	return useMutation({
		mutationFn: codeConfirm,
	})
}
