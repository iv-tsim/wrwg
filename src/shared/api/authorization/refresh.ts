import { API_URL } from '@/shared/config'
import { protectedApi } from './base'

export interface IRefreshResponse {
	access: string
}

export const refreshToken = () =>
	protectedApi.post<IRefreshResponse>(
		`${API_URL}/token_refresh/`,
		{},
		{
			headers: {
				'Content-Type': 'application/json',
			},
			withCredentials: true,
		}
	)
