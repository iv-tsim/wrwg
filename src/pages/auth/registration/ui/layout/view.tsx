import { WithBackground } from '@/shared/layouts'
import { Logo, Typography } from '@/shared/ui'
import type { FC, ReactNode } from 'react'

import css from './styles.module.scss'

import backgroundUrl from '@assets/img/backgrounds/bg_1.jpg'
import earthUrl from '@assets/img/planets/earth.png'

interface IAuthRegisterLayoutProps {
	children: {
		children: ReactNode
		bottom: ReactNode
	}
	title: string
}

export const AuthRegisterLayout: FC<IAuthRegisterLayoutProps> = ({
	children,
	title,
}) => {
	return (
		<WithBackground imageUrl={backgroundUrl} className={css.wrapper}>
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

			<img src={earthUrl} alt='earth' className={css.wrapper__planet} />
		</WithBackground>
	)
}
