import { commonApi } from '../base'

interface IRequest {
	email: string
}

interface IResponse {
	detail: string
}

export const reset = async (data: IRequest) => {
	const response = await commonApi.post<IResponse>('/password_reset/', data)
	return response.data
}
