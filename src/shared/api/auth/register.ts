import { commonApi } from '../base'

export interface IRegisterInfo {
	username: string
	email: string
	password: string
	fullName: string
	team: number
}

interface IRequest extends IRegisterInfo {}

interface IResponse {
	detail: string
}

export const register = async (data: IRequest) => {
	const response = await commonApi.post<IResponse>('/user_register/', data)
	return response.data
}
