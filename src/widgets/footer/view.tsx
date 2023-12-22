import { IconButton, Stars } from '@/shared/ui'
import cn from 'classnames'
import { useNavigate } from 'react-router'
import { routesPath } from '@/shared/routing'
import { api } from '@/shared/api'
import { useQuery } from '@tanstack/react-query'
import { GET_USER_KEY } from '@/shared/config'

import type { FC } from 'react'

import css from './styles.module.scss'

export const Footer: FC<IWithClassname> = ({ className }) => {
	const navigate = useNavigate()

	const { data, isLoading } = useQuery({
		queryKey: GET_USER_KEY,
		queryFn: api.user.get,
	})

	return (
		<footer className={cn('container', css.footer, className)}>
			<div className={css.footer__container}>
				<IconButton
					iconId='rating'
					onClick={() => navigate(routesPath.rating)}
					className={css.footer__rating}
				>
					Рейтинг
				</IconButton>
				<Stars number={data?.rating || 0} disabled={isLoading} />
			</div>
		</footer>
	)
}
