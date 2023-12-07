import type { FC } from 'react'
import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Typography } from '@/shared/ui'
import cn from 'classnames'

import css from './styles.module.scss'

export interface ILinkProps extends LinkProps {}

export const CustomLink: FC<ILinkProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<Link {...props} className={cn(css.link, className)}>
			<Typography as='span' variant='desc'>
				{children}
			</Typography>
		</Link>
	)
}
