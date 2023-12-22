import { useNavigate } from 'react-router'
import { Planet, IconButton } from '@/shared/ui'
import { routesPath } from '@/shared/routing'
import cn from 'classnames'

import type { IPlanetProps } from '@/shared/ui'
import type { FC } from 'react'

import css from './styles.module.scss'

interface IPlanetHeaderProps extends IPlanetProps, IWithClassname {}

export const PlanetHeader: FC<IPlanetHeaderProps> = ({ className, ...props }) => {
	const navigate = useNavigate()

	return (
		<header className={cn('container', css.header, className)}>
			<Planet {...props} />

			<IconButton onClick={() => navigate(routesPath.home)} iconId='leave-planet' isReversed={true}>
				Покинуть планету
			</IconButton>
		</header>
	)
}
