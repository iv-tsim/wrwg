import { WithBackground } from '@/shared/layouts'
import { MenuItem } from './item/view'
import { Link, useNavigate } from 'react-router-dom'
import { CloseButton, Typography } from '@/shared/ui'
import { Logo } from '@/shared/ui'
import { routesPath } from '@/shared/routing'
import { planets } from '@/entities/planet'
import { useQuery } from '@tanstack/react-query'
import { GET_COMPANY_KEY } from '@/shared/config'
import { api } from '@/shared/api'
import cn from 'classnames'

import css from './styles.module.scss'

import { BackgroundOneImage } from '@assets/img/backgrounds'

export const Menu = () => {
	const { data } = useQuery({
		queryKey: GET_COMPANY_KEY,
		queryFn: api.company.get,
	})

	const navigate = useNavigate()

	return (
		<WithBackground imageUrl={BackgroundOneImage} className={css.wrapper}>
			<header className={cn('container', css.wrapper__header)}>
				<div className={css.wrapper__headerContainer}>
					<Logo className={css.wrapper__logo} />
					<CloseButton
						variant='light'
						className={css.wrapper__close}
						onClick={() => navigate(routesPath.home)}
					/>
				</div>
			</header>
			{Object.entries(planets).map(([key, planet]) => (
				<MenuItem
					key={key}
					planet={planet.name}
					planetDirection={planet.menuNameDirection}
					mobilePlanetDirection={planet.mobileMenuNameDirection}
					title={planet.title}
					to={planet.to}
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
