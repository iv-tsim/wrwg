import { routesPath } from '@/shared/routing'
import {
	PlanetJupiterImage,
	PlanetMercuryImage,
	PlanetVenusImage,
	PlanetMarsImage,
} from '@assets/img/planets'

enum EPlanets {
	'mercury' = 'mercury',
	'mars' = 'mars',
	'venus' = 'venus',
	'jupiter' = 'jupiter',
}

export type TPlanet = keyof typeof EPlanets

export type TPlanetNameDirection = 'left' | 'right'

interface IPlanet {
	to: string
	name: string
	title: string
	nameDirection: TPlanetNameDirection
	menuNameDirection: TPlanetNameDirection
	mobileMenuNameDirection: TPlanetNameDirection
	homeImageUrl: string
}

export const planets: Record<TPlanet, IPlanet> = {
	jupiter: {
		name: 'Юпитер',
		title: 'команда',
		to: routesPath.home,
		nameDirection: 'right',
		menuNameDirection: 'right',
		mobileMenuNameDirection: 'right',
		homeImageUrl: PlanetJupiterImage,
	},
	mars: {
		name: 'Марс',
		title: 'инновационный проект',
		to: routesPath.home,
		nameDirection: 'left',
		menuNameDirection: 'left',
		mobileMenuNameDirection: 'right',
		homeImageUrl: PlanetMarsImage,
	},
	mercury: {
		name: 'Меркурий',
		title: 'викторины',
		to: routesPath.planets_mercury,
		nameDirection: 'left',
		menuNameDirection: 'right',
		mobileMenuNameDirection: 'left',
		homeImageUrl: PlanetMercuryImage,
	},
	venus: {
		name: 'Венера',
		title: 'тематическая неделя',
		to: routesPath.home,
		nameDirection: 'right',
		menuNameDirection: 'left',
		mobileMenuNameDirection: 'left',
		homeImageUrl: PlanetVenusImage,
	},
}
