import { commonApi } from '../base'

interface IRequest {
	email: string
	code: string
}

interface IResponse {
	detail: string
}

export const verifyRegistration = async (data: IRequest) => {
	const response = await commonApi.post<IResponse>('/user_verify/', data)
	return response.data
}
