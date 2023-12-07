import { ACCESS_TOKEN, API_URL } from '@/shared/config'
import type { AxiosError } from 'axios'
import axios from 'axios'
import { refreshToken } from './refresh'
import { useAuth } from '@/entities'

declare module 'axios' {
	export interface AxiosRequestConfig {
		_isRetried?: boolean
	}
}

const createProtectedApi = (logout: VoidFunction) => {
	const client = axios.create({
		baseURL: API_URL,
		headers: {
			'Content-Type': 'application/json',
		},
	})

	client.interceptors.request.use(config => {
		const token = localStorage.getItem(ACCESS_TOKEN)

		if (token) {
			config.headers.Authorization = `Bearer ${localStorage.getItem(
				ACCESS_TOKEN
			)}`
		}

		return config
	})

	client.interceptors.response.use(undefined, async (error: AxiosError) => {
		const config = error.config

		if (error.response) {
			if (error.response.status === 401 && config && !config._isRetried) {
				if (!config.headers.Authorization) return Promise.reject(error)

				config._isRetried = true

				try {
					const refreshResponse = await refreshToken()
					localStorage.setItem(ACCESS_TOKEN, refreshResponse.data.access)
					return client.request(config)
				} catch (e) {
					logout()
				}
			}
		}
		return Promise.reject(error)
	})

	return client
}

const logOutUser = async () => {
	const logout = useAuth.getState().logOut
	logout()
}

export const protectedApi = createProtectedApi(logOutUser)
