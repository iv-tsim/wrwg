import { updateDeviceProps } from '@/shared/lib'
import { useEffect } from 'react'

import type { FC, PropsWithChildren } from 'react'

export const WithDeviceProps: FC<PropsWithChildren> = ({ children }) => {
	useEffect(() => {
		updateDeviceProps()

		window.addEventListener('resize', updateDeviceProps)

		return () => {
			window.removeEventListener('resize', updateDeviceProps)
		}
	}, [])

	return children
}
