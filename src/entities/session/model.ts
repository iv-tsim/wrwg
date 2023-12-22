import { create } from 'zustand'

interface IState {
	isLoggedIn: boolean
}

interface IAction {
	logIn: VoidFunction
	logOut: VoidFunction
}

export const useSession = create<IState & IAction>(set => ({
	isLoggedIn: false,
	logIn: () => set(() => ({ isLoggedIn: true })),
	logOut: () => set(() => ({ isLoggedIn: false })),
}))

export const useIsUserAuthorized = () => useSession(store => store.isLoggedIn)
