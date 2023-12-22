import { Navigate, useLocation } from 'react-router-dom'
import { routesPath } from '@/shared/routing'
import { useIsUserAuthorized } from '@/entities/session'

import type { FC, PropsWithChildren } from 'react'

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
	const isLoggedIn = useIsUserAuthorized()
	const location = useLocation()

	return isLoggedIn ? (
		<>{children}</>
	) : (
		<Navigate to={routesPath.auth} replace={true} state={{ from: location }} />
	)
}
