import { Typography } from '@/shared/ui'
import { useNavigate } from 'react-router'
import cn from 'classnames'

import type { ButtonHTMLAttributes, FC } from 'react'

import css from './styles.module.scss'

import { PlanetOrionImage } from '@assets/img/planets'
import { CursorImage } from '@/shared/assets/img/home'

export interface IPlanetProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onClick'> {
	imageUrl: string
	to: string
	title: string
	mobileTitlePosition: 'left' | 'right'
}

export const Planet: FC<IPlanetProps> = ({
	className,
	imageUrl,
	title,
	mobileTitlePosition,
	to,
	...props
}) => {
	const navigate = useNavigate()

	return (
		<button
			className={cn(css.planet, className, {
				[css.planet_mobile_titleDirection_left]: mobileTitlePosition === 'left',
				[css.planet_mobile_titleDirection_right]: mobileTitlePosition === 'right',
			})}
			onClick={() => navigate(to)}
			{...props}
		>
			<img src={imageUrl} alt={title} className={css.planet__img} />
			<Typography variant='shipname' className={css.planet__title}>
				{title}
			</Typography>
			<img src={PlanetOrionImage} alt='orion' className={css.planet__orion} />
			<img src={CursorImage} alt='orion' className={css.planet__cursor} />
		</button>
	)
}
