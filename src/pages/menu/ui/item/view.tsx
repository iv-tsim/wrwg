import { Typography } from '@/shared/ui'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import type { FC } from 'react'
import type { TPlanetNameDirection } from '@/entities/planet'

import css from './styles.module.scss'

export interface IMenuItemProps extends IWithClassname {
	planet: string
	title: string
	to: string
	planetDirection: TPlanetNameDirection
	mobilePlanetDirection: TPlanetNameDirection
	disabled?: boolean
}

export const MenuItem: FC<IMenuItemProps> = ({
	planet,
	title,
	to,
	planetDirection,
	mobilePlanetDirection,
	className,
	disabled = false,
}) => {
	return (
		<Link
			to={to}
			className={cn(css.item, className, {
				[css.item_direction_left]: planetDirection === 'left',
				[css.item_direction_right]: planetDirection === 'right',
				[css.item_adaptive_direction_left]: mobilePlanetDirection === 'left',
				[css.item_adaptive_direction_right]: mobilePlanetDirection === 'right',
				[css.item_status_disabled]: disabled,
			})}
		>
			<Typography variant='bigfont' className={css.item__planet}>
				({planet})
			</Typography>
			<Typography variant='menuitem' className={css.item__title}>
				{title}
			</Typography>
		</Link>
	)
}
