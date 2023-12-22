import { AxiosError } from 'axios'

export const isCommonError = (error: unknown): error is AxiosError<IError> => {
	if (typeof error !== 'object' || !error) return false

	if (!('response' in error)) return false

	if (typeof error.response !== 'object') return false

	if (!('data' in (error.response as object))) return false

	return true
}
