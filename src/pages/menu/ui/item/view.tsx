import { Typography } from '@/shared/ui'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { TPlanetNameDirection } from '@/entities'
import cn from 'classnames'

import css from './styles.module.scss'

export interface IMenuItemProps extends IWithClassname {
	planet: string
	title: string
	to: string
	planetDirection: TPlanetNameDirection
	disabled?: boolean
}

export const MenuItem: FC<IMenuItemProps> = ({
	planet,
	title,
	to,
	planetDirection,
	className,
	disabled = false,
}) => {
	return (
		<Link
			to={to}
			className={cn(css.item, className, {
				[css.item_direction_left]: planetDirection === 'left',
				[css.item_direction_right]: planetDirection === 'right',
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
