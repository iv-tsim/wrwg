import { createBrowserRouter } from 'react-router-dom'
import { routesPath } from './paths'
import {
	Auth,
	AuthChangePassword,
	AuthLogin,
	AuthRegistration,
	Home,
	Menu,
	Mercury,
	Rating,
} from '@/pages'
import { ProtectedRoute, RedirectIfLoggedIn } from './ui'

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
		element: (
			<RedirectIfLoggedIn>
				<Auth />
			</RedirectIfLoggedIn>
		),
	},
	{
		path: routesPath.auth_login,
		element: (
			<RedirectIfLoggedIn>
				<AuthLogin />
			</RedirectIfLoggedIn>
		),
	},
	{
		path: routesPath.auth_registration,
		element: (
			<RedirectIfLoggedIn>
				<AuthRegistration />
			</RedirectIfLoggedIn>
		),
	},
	{
		path: routesPath.auth_change_password,
		element: (
			<RedirectIfLoggedIn>
				<AuthChangePassword />
			</RedirectIfLoggedIn>
		),
	},
	{
		path: routesPath.menu,
		element: (
			<ProtectedRoute>
				<Menu />
			</ProtectedRoute>
		),
	},
	{
		path: routesPath.rating,
		element: (
			<ProtectedRoute>
				<Rating />
			</ProtectedRoute>
		),
	},
	{
		path: routesPath.planets_mercury,
		element: (
			<ProtectedRoute>
				<Mercury />
			</ProtectedRoute>
		),
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
