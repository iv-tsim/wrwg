import { router } from '@/shared/routing'
import { RouterProvider } from 'react-router-dom'
import { WithProviders } from './providers'

import './styles/index.scss'

export const App = () => {
	return (
		<WithProviders>
			<RouterProvider router={router} />
		</WithProviders>
	)
}
