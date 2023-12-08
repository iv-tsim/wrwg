import { FC, PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { routesPath } from '@/shared/lib'
import { useIsUserAuthorized } from '@/entities'

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
	const isLoggedIn = useIsUserAuthorized()
	const location = useLocation()

	return isLoggedIn ? (
		<>{children}</>
	) : (
		<Navigate to={routesPath.auth} replace={true} state={{ from: location }} />
	)
}
