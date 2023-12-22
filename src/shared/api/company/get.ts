import { commonApi } from '../base'

export interface ICompany {
	teams: ITeam[]
	about: string
	legal: string
}

export interface ITeam {
	id: number
	name: string
	image: {
		registration: string
		mainPage: string
		transition: string
		folder: string
	}
}

interface IResponse extends ICompany {}

export const get = async () => {
	const response = await commonApi.get<IResponse>('/company/')
	return response.data
}
