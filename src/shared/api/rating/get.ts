import { protectedApi } from '../pretected'

interface IUserRating {
	username: string
	avatar: string
	rating: number
}

interface ITeamRating {
	name: string
	rating: number
}

interface IRating {
	userRatingList: IUserRating[]
	userRating: number
	teamRatingList: ITeamRating[]
	userTeamRating: number
}

export const get = async (param: string) => {
	const response = await protectedApi.get<IRating>('/rating/', {
		params: {
			ordering: param,
		},
	})
	return response.data
}
