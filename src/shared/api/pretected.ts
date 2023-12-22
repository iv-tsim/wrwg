import axios from 'axios'
import { refreshToken } from './auth'
import { ACCESS_TOKEN, API_URL } from '@/shared/config'
import { useSession } from '@/entities/session'

import type { AxiosError } from 'axios'

const createApi = () => {
	const client = axios.create({
		baseURL: API_URL,
		headers: {
			'Content-Type': 'application/json',
		},
	})

	const logout = useSession.getState().logOut

	client.interceptors.request.use(config => {
		const token = localStorage.getItem(ACCESS_TOKEN)

		if (token) {
			config.headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
		}

		return config
	})

	client.interceptors.response.use(undefined, async (error: AxiosError) => {
		const config = error.config

		if (error.response) {
			if (error.response.status === 401 && config && config.url !== `${API_URL}/token_refresh/`) {
				if (!config.headers.Authorization) return Promise.reject(error)

				try {
					const refreshResponse = await refreshToken()

					if (refreshResponse.data) {
						localStorage.setItem(ACCESS_TOKEN, refreshResponse.data.access)
					} else {
						logout()
					}

					return client.request(config)
				} catch (e) {
					throw new Error('Refresh token error')
				}
			}
		}
		return Promise.reject(error)
	})

	return client
}

export const protectedApi = createApi()
