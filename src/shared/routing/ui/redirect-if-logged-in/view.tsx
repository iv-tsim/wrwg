import { isValidElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useIsUserAuthorized } from '@/entities/session'
import { routesPath } from '@/shared/routing'

import type { FC, PropsWithChildren } from 'react'

export const RedirectIfLoggedIn: FC<PropsWithChildren> = ({ children }) => {
	const isLoggedIn = useIsUserAuthorized()
	const location = useLocation()

	if (isLoggedIn) {
		return (
			<Navigate
				to={location.state?.from || routesPath.home}
				replace={true}
				state={{
					from: location,
				}}
			/>
		)
	}

	return isValidElement(children) ? children : null
}
