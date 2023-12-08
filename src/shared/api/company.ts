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
