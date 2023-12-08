import type { FC, PropsWithChildren } from 'react'
import cn from 'classnames'

import css from './styles.module.scss'

interface IWithBackgroundProps extends PropsWithChildren, IWithClassname {
	imageUrl: string
}

export const WithBackground: FC<IWithBackgroundProps> = ({
	imageUrl,
	children,
	className,
}) => {
	return (
		<div
			className={cn(css.wrapper, className)}
			style={{ backgroundImage: `url(${imageUrl})` }}
		>
			{children}
		</div>
	)
}
