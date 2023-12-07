import type { FC, ReactNode, PropsWithChildren } from 'react'
import { DecorativeBorder, Logo, Typography } from '@/shared/ui'
import { WithBackground } from '@/shared/layouts'

import css from './styles.module.scss'

import backgroundUrl from '@assets/img/backgrounds/bg_1.jpg'
import earthUrl from '@assets/img/planets/earth.png'

interface ICommonAuthLayoutProps extends PropsWithChildren {
	title: string
	optional?: ReactNode
}

export const CommonAuthLayout: FC<ICommonAuthLayoutProps> = ({
	title,
	children,
	optional,
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

				<div className={css.main__wrapper}>
					<DecorativeBorder position='left' className={css.main__border}>
						{optional}
					</DecorativeBorder>
					<div className={css.main__content}>{children}</div>
					<DecorativeBorder position='right' className={css.main__border} />
				</div>
			</main>

			<img src={earthUrl} alt='earth' className={css.wrapper__planet} />
		</WithBackground>
	)
}
