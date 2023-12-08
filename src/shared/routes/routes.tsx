import { createBrowserRouter } from 'react-router-dom'
import { routesPath } from './paths'
import {
	Auth,
	AuthChangePassword,
	AuthLogin,
	AuthRegistration,
	Home,
	Menu,
} from '@/pages'
import { ProtectedRoute } from '@/shared/layouts'

export const router = createBrowserRouter([
	{
		path: routesPath.home,
		element: (
			<ProtectedRoute>
				<Home />
			</ProtectedRoute>
		),
	},
	{
		path: routesPath.auth,
		element: <Auth />,
	},
	{
		path: routesPath.auth_login,
		element: <AuthLogin />,
	},
	{
		path: routesPath.auth_registration,
		element: <AuthRegistration />,
	},
	{
		path: routesPath.auth_change_password,
		element: <AuthChangePassword />,
	},
	{
		path: routesPath.menu,
		element: <Menu />,
	},
	{
		path: '*',
		element: (
			<ProtectedRoute>
				<Home />
			</ProtectedRoute>
		),
	},
])
