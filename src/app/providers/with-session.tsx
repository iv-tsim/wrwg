import { useSession } from '@/entities/session'
import { api } from '@/shared/api'
import { useQuery } from '@tanstack/react-query'

import type { FC, PropsWithChildren } from 'react'

export const WithSession: FC<PropsWithChildren> = ({ children }) => {
	const loginUser = useSession(state => state.logIn)

	const { isLoading, isSuccess } = useQuery({
		queryFn: api.auth.verifyToken,
		queryKey: ['token_verify'],
		retry: 0,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
	})

	if (isLoading) return null

	if (isSuccess) {
		loginUser()
	}

	return children
}
