import { routesPath } from '@/shared/routing'
import { IconButton, Logo } from '@/shared/ui'
import { useNavigate } from 'react-router'
import { api } from '@/shared/api'
import { useQuery } from '@tanstack/react-query'
import { GET_USER_KEY } from '@/shared/config'
import cn from 'classnames'

import type { FC } from 'react'

import css from './styles.module.scss'

export const Header: FC<IWithClassname> = ({ className }) => {
	const navigate = useNavigate()

	const { data, isLoading } = useQuery({
		queryKey: GET_USER_KEY,
		queryFn: api.user.get,
	})

	return (
		<header className={cn('container', css.header, className)}>
			<div className={css.header__container}>
				<div className={css.header__left}>
					<IconButton
						iconId='menu'
						onClick={() => navigate(routesPath.menu)}
						className={css.header__menu}
					>
						меню
					</IconButton>
					<IconButton
						iconId='rating'
						onClick={() => navigate(routesPath.rating)}
						className={css.header__rating}
					>
						рейтинг
					</IconButton>
				</div>
				<Logo className={css.header__logo} />
				<div className={css.header__right}>
					<IconButton
						isReversed={true}
						iconId='journal'
						className={css.header__journal}
						disabled={true}
					>
						Бортовой журнал
					</IconButton>
					<IconButton
						isReversed={true}
						iconId='personal-account'
						className={css.header__pa}
						disabled={true}
						hideContent={isLoading}
						imageUrl={data?.avatar}
					>
						Личный кабинет
					</IconButton>
				</div>
			</div>
		</header>
	)
}
