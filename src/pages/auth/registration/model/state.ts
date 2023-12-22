import { create } from 'zustand'

import type { IRegisterInfo } from '@/shared/api/auth'
import type { ITeam } from '@/shared/api/company'

type TStep = 'slider' | 'form' | 'verify'

interface IState {
	step: TStep
	team: ITeam | null
	info: IRegisterInfo | null
}

interface IActions {
	setStep: (step: TStep) => void
	setTeam: (team: ITeam) => void
	setInfo: (info: IRegisterInfo) => void
}

export const useRegisterState = create<IState & IActions>(set => ({
	step: 'slider',
	info: null,
	team: null,
	setInfo: info => set({ info }),
	setTeam: team => set({ team }),
	setStep: step => set({ step }),
}))
