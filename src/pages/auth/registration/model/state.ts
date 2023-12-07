import { ITeam } from '@/shared/model'
import { create } from 'zustand'
import { IRegisterRequest } from '../api'

type TStep = 'slider' | 'form' | 'verify'

interface IState {
	step: TStep
	team: ITeam | null
	info: IRegisterRequest | null
}

interface IActions {
	setStep: (step: TStep) => void
	setTeam: (team: ITeam) => void
	setInfo: (info: IRegisterRequest) => void
}

export const useRegisterState = create<IState & IActions>(set => ({
	step: 'slider',
	info: null,
	team: null,
	setInfo: info => set({ info }),
	setTeam: team => set({ team }),
	setStep: step => set({ step }),
}))
