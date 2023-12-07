import { FC, PropsWithChildren, isValidElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/entities'
import { routesPath } from '@/shared/lib'

export const RedirectIfLoggedIn: FC<PropsWithChildren> = ({ children }) => {
	const isLoggedIn = useAuth(state => state.isLoggedIn)
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
