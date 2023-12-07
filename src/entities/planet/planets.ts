import { routesPath } from '@/shared/lib'
import jupiterUrl from '@assets/img/planets/jupiter.png'
import mercuryUrl from '@assets/img/planets/mercury.png'
import venusUrl from '@assets/img/planets/venus.png'
import marsUrl from '@assets/img/planets/mars.png'

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
	homeImageUrl: string
}

export const planets: Record<TPlanet, IPlanet> = {
	jupiter: {
		name: 'Юпитер',
		title: 'команда',
		to: routesPath.planets_mercury,
		nameDirection: 'right',
		homeImageUrl: jupiterUrl,
	},
	mars: {
		name: 'Марс',
		title: 'инновационный проект',
		to: routesPath.planets_mercury,
		nameDirection: 'left',
		homeImageUrl: marsUrl,
	},
	mercury: {
		name: 'Меркурий',
		title: 'викторины',
		to: routesPath.planets_mercury,
		nameDirection: 'right',
		homeImageUrl: mercuryUrl,
	},
	venus: {
		name: 'Венера',
		title: 'тематическая неделя',
		to: routesPath.planets_mercury,
		nameDirection: 'left',
		homeImageUrl: venusUrl,
	},
}
