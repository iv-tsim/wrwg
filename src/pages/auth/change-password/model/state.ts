import { create } from 'zustand'

type TStep = 'email' | 'code' | 'form'

interface IState {
	email: string
	step: TStep
}

interface IAction {
	setEmail: (email: string) => void
	setStep: (step: TStep) => void
	reset: VoidFunction
}

export const useAuthResetPasswordState = create<IState & IAction>(set => ({
	email: '',
	step: 'email',
	setEmail: email => set({ email }),
	setStep: step => set({ step }),
	reset: () =>
		set({
			email: '',
			step: 'email',
		}),
}))
