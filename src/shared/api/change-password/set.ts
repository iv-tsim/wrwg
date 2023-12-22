import { commonApi } from '../base'

interface IRequest {
	email: string
	newPassword: string
}

interface IResponse {
	detail: string
}

export const set = async (data: IRequest) => {
	const response = await commonApi.post<IResponse>('/password_set/', data)
	return response.data
}
