import { ToastContainer } from 'react-toastify'

import type { FC, PropsWithChildren } from 'react'

export const WithToastContainer: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<ToastContainer position='bottom-right' theme='dark' />
			{children}
		</>
	)
}
