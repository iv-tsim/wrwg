import { WithBackground } from '@/shared/layouts'
import { MenuItem } from './item/view'
import { Link, useNavigate } from 'react-router-dom'
import { CloseButton, Typography } from '@/shared/ui'
import { useGetCompanyInfo } from '@/shared/api'
import { Logo } from '@/shared/ui'
import { routesPath } from '@/shared/lib'
import { planets } from '@/entities'
import cn from 'classnames'

import css from './styles.module.scss'

import backgroundUrl from '@assets/img/backgrounds/bg_1.jpg'

export const Menu = () => {
	const { data } = useGetCompanyInfo()
	const navigate = useNavigate()

	return (
		<WithBackground imageUrl={backgroundUrl} className={css.wrapper}>
			<header className={cn('container', css.wrapper__header)}>
				<div />
				<Logo className={css.wrapper__logo} />
				<CloseButton
					variant='light'
					className={css.wrapper__close}
					onClick={() => navigate(routesPath.home)}
				/>
			</header>
			{Object.entries(planets).map(([key, value]) => (
				<MenuItem
					key={key}
					planet={value.name}
					planetDirection={value.nameDirection}
					title={value.title}
					to={value.to}
					className={cn(css.item, css[`item_${key}`])}
				/>
			))}
			<div className={cn('container', css.wrapper__bottom)}>
				<ul className={css.wrapper__list}>
					<li className={css.wrapper__item}>
						<Link to={data?.about || ''} className={css.wrapper__link}>
							<Typography variant='bigfont' as='span'>
								о проекте
							</Typography>
						</Link>
					</li>
					<li className={css.wrapper__item}>
						<Link to={data?.legal || ''} className={css.wrapper__link}>
							<Typography variant='bigfont' as='span'>
								юридическая информация
							</Typography>
						</Link>
					</li>
				</ul>
			</div>
		</WithBackground>
	)
}
