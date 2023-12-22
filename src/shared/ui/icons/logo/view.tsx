import { Link } from 'react-router-dom'
import { routesPath } from '@/shared/routing'
import cn from 'classnames'

import type { FC } from 'react'
import type { LinkProps } from 'react-router-dom'

import css from './styles.module.scss'

export interface ILogoProps extends Partial<LinkProps> {}

export const Logo: FC<ILogoProps> = ({ className, ...props }) => {
	return (
		<Link {...props} to={routesPath.home} className={cn(css.link, className)}>
			<svg className={css.link__logo}>
				<use xlinkHref='#logo' />
			</svg>
		</Link>
	)
}
