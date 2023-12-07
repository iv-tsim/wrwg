import { updateDeviceProps } from '@/shared/helpers'
import { router } from '@/shared/lib'
import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useTokenVerify } from './api'
import { useAuth } from '@/entities'

export const App = () => {
	const loginUser = useAuth(state => state.logIn)

	const { isFetching, isLoading, isSuccess } = useTokenVerify()

	useEffect(() => {
		updateDeviceProps()

		window.addEventListener('resize', updateDeviceProps)

		return () => {
			window.removeEventListener('resize', updateDeviceProps)
		}
	}, [])

	if (isFetching || isLoading) return null

	if (isSuccess) {
		loginUser()
	}

	return <RouterProvider router={router} />
}

