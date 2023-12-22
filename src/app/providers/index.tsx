import { WithQueryClient } from './with-query-client'
import { WithSession } from './with-session'
import { WithToastContainer } from './with-toast-container'
import { WithDeviceProps } from './with-device-props'

import type { FC, PropsWithChildren } from 'react'

export const WithProviders: FC<PropsWithChildren> = ({ children }) => {
	return (
		<WithQueryClient>
			<WithSession>
				<WithToastContainer>
					<WithDeviceProps>{children}</WithDeviceProps>
				</WithToastContainer>
			</WithSession>
		</WithQueryClient>
	)
}
