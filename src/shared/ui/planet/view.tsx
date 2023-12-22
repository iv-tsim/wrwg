import { Typography } from '../typography'

import type { FC } from 'react'

import css from './styles.module.scss'

import { PlanetOrionWhiteImage } from '@/shared/assets/img/planets'

export interface IPlanetProps {
	planetImg: string
	planetName: string
}

export const Planet: FC<IPlanetProps> = ({ planetImg, planetName }) => {
	return (
		<div className={css.planet}>
			<div className={css.planet__imgWrapper}>
				<img src={planetImg} alt={planetName} className={css.planet__img} />
				<img src={PlanetOrionWhiteImage} alt='orion' className={css.planet__orion} />
			</div>
			<Typography variant='bigfont' className={css.planet__name}>
				{planetName}
			</Typography>
		</div>
	)
}
