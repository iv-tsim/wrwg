import { DecorativeBorder, Logo, Typography } from '@/shared/ui'
import { WithBackground } from '@/shared/layouts'
import cn from 'classnames'

import type { FC, ReactNode, PropsWithChildren } from 'react'

import css from './styles.module.scss'

import { BackgroundOneImage } from '@assets/img/backgrounds'
import { PlanetEarthImage } from '@assets/img/planets'

interface ICommonAuthLayoutProps extends PropsWithChildren {
	title: string
	optional?: ReactNode
}

export const CommonAuthLayout: FC<ICommonAuthLayoutProps> = ({ title, children, optional }) => {
	return (
		<WithBackground imageUrl={BackgroundOneImage} className={css.wrapper}>
			<header className={css.header}>
				<Logo className={css.header__logo} />
			</header>

			<main className={css.main}>
				<Typography as='h1' variant='h1' className={css.main__title}>
					{title}
				</Typography>

				<div className={css.main__wrapper}>
					<DecorativeBorder
						position='left'
						className={cn(css.main__border, css.main__border_position_left)}
					>
						{optional}
					</DecorativeBorder>
					<div className={css.main__content}>{children}</div>
					<DecorativeBorder
						position='right'
						className={cn(css.main__border, css.main__border_position_right)}
					/>
				</div>
			</main>

			<img src={PlanetEarthImage} alt='earth' className={css.wrapper__planet} />
		</WithBackground>
	)
}
