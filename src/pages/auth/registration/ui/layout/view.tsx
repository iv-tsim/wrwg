import { WithBackground } from '@/shared/layouts'
import { Logo, Typography } from '@/shared/ui'
import cn from 'classnames'

import type { FC, ReactNode } from 'react'

import css from './styles.module.scss'

import { BackgroundOneImage } from '@assets/img/backgrounds'
import { PlanetEarthImage } from '@assets/img/planets'

interface IAuthRegisterLayoutProps {
	children: {
		children: ReactNode
		bottom: ReactNode
	}
	title: string
	uniqueAdaptive?: boolean
}

export const AuthRegisterLayout: FC<IAuthRegisterLayoutProps> = ({
	children,
	title,
	uniqueAdaptive = false,
}) => {
	return (
		<WithBackground
			imageUrl={BackgroundOneImage}
			className={cn(css.wrapper, {
				[css.wrapper_adaptive_unique]: uniqueAdaptive,
			})}
		>
			<header className={css.header}>
				<Logo className={css.header__logo} />
			</header>

			<main className={css.main}>
				<Typography as='h1' variant='h1' className={css.main__title}>
					{title}
				</Typography>
				<div className={css.main__content}>{children.children}</div>
				<div className={css.main__bottom}>{children.bottom}</div>
			</main>

			<img src={PlanetEarthImage} alt='earth' className={css.wrapper__planet} />
		</WithBackground>
	)
}
