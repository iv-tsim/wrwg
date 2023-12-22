import cn from 'classnames'

import type { FC } from 'react'

import css from './styles.module.scss'

export interface ILoadingProps extends IWithClassname {}

export const Loading: FC<ILoadingProps> = ({ className }) => {
	return (
		<svg className={cn(css.loading, className)}>
			<use xlinkHref='#loading' />
		</svg>
	)
}
