import { PUBLIC_URL } from '@/shared/config'

export enum ERoutesName {
	HOME = 'home',
	AUTH = 'auth',
	AUTH_CHANGE_PASSWORD = 'auth_change_password',
	AUTH_LOGIN = 'auth_login',
	AUTH_REGISTRATION = 'auth_registration',
	CABINET = 'CABINET',
	CABINET_CHANGE_PASSWORD = 'cabinet_change_password',
	CABINET_EDIT = 'cabinet_edit',
	MENU = 'menu',
	RATING = 'rating',
	PLANETS_MERCURY = 'planets_mercury',
}

export const routesPath: Record<ERoutesName, string> = {
	[ERoutesName.HOME]: `${PUBLIC_URL}`,
	[ERoutesName.AUTH]: `${PUBLIC_URL}auth`,
	[ERoutesName.AUTH_CHANGE_PASSWORD]: `${PUBLIC_URL}change-password`,
	[ERoutesName.AUTH_LOGIN]: `${PUBLIC_URL}login`,
	[ERoutesName.AUTH_REGISTRATION]: `${PUBLIC_URL}registration`,
	[ERoutesName.CABINET]: `${PUBLIC_URL}cabinet`,
	[ERoutesName.CABINET_CHANGE_PASSWORD]: `${PUBLIC_URL}cabinet/change-password`,
	[ERoutesName.CABINET_EDIT]: `${PUBLIC_URL}cabinet/edit`,
	[ERoutesName.MENU]: `${PUBLIC_URL}menu`,
	[ERoutesName.RATING]: `${PUBLIC_URL}rating`,
	[ERoutesName.PLANETS_MERCURY]: `${PUBLIC_URL}mercury`,
}
