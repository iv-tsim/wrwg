import { TDefaultButtonProps } from '@/shared/model'
import { Typography } from '@/shared/ui'
import { FC } from 'react'
import cn from 'classnames'

import css from './styles.module.scss'

import orionImageUrl from '@assets/img/planets/orion.svg'

export interface IPlanetProps extends Omit<TDefaultButtonProps, 'children'> {
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
	...props
}) => {
	return (
		<button
			className={cn(css.planet, className, {
				[css.planet_mobile_titleDirection_left]: mobileTitlePosition === 'left',
				[css.planet_mobile_titleDirection_right]:
					mobileTitlePosition === 'right',
			})}
			{...props}
		>
			<img src={imageUrl} alt={title} className={css.planet__img} />
			<Typography variant='shipname' className={css.planet__title}>
				{title}
			</Typography>
			<img src={orionImageUrl} alt='orion' className={css.planet__orion} />
		</button>
	)
}
