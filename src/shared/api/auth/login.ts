import { commonApi } from '../base'

interface IRequest {
	username: string
	password: string
}

interface IResponse {
	access: string
}

export const login = async (data: IRequest) => {
	const response = await commonApi.post<IResponse>('/token_get/', data, {
		withCredentials: true,
	})
	return response.data
}
