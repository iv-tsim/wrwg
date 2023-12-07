import type { TDefaultButtonProps } from '@/shared/model'
import type { FC } from 'react'
import { Typography } from '@/shared/ui'
import cn from 'classnames'

import css from './styles.module.scss'

export interface IMainTabProps extends TDefaultButtonProps {
	isActive: boolean
}

export const MainTab: FC<IMainTabProps> = ({
	className,
	children,
	isActive,
	...props
}) => {
	return (
		<button
			className={cn(css.tab, className, {
				[css.tab_status_active]: isActive,
			})}
			{...props}
		>
			<Typography as='span' variant='bigfont'>
				{children}
			</Typography>
		</button>
	)
}
