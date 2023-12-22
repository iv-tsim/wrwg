import { commonApi } from '../base'

interface IRequest {
	email: string
	code: string
}

interface IResponse {
	detail: string
}

export const confirmCode = async (data: IRequest) => {
	const response = await commonApi.post<IResponse>('/code_confirm/', data)
	return response.data
}
