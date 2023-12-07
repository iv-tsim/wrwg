import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { routesPath } from '@/shared/lib'
import cn from 'classnames'

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
