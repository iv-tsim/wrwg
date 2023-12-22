import { create } from 'zustand'

import type { IClientQuizAnswer } from '.'

interface IState {
	answers: IClientQuizAnswer[]
	isDetailOpened: boolean
	openedDetailId: number
}

interface IActions {
	addAnswer: (answer: IClientQuizAnswer) => void
	setIsDetailOpened: (isOpened: boolean) => void
	setOpenedDetailId: (id: number) => void
	reset: VoidFunction
}

export const useQuizStore = create<IState & IActions>(set => ({
	answers: [],
	isDetailOpened: false,
	openedDetailId: 0,
	addAnswer: answer => set(state => ({ answers: [...state.answers, answer] })),
	setIsDetailOpened: isDetailOpened => set({ isDetailOpened }),
	setOpenedDetailId: openedDetailId => set({ openedDetailId }),
	reset: () =>
		set({
			answers: [],
			openedDetailId: 0,
			isDetailOpened: false,
		}),
}))
