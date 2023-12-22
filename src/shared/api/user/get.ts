import { protectedApi } from '../pretected'

import type { ITeam } from '../company'

interface IResponse {
	fullName: string
	username: string
	email: string
	avatar: string
	team: ITeam
	rating: number
	lastLogin: string
}

export const get = async () => {
	const response = await protectedApi.get<IResponse>('/user_profile/')
	return response.data
}
