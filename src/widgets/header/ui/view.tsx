import { routesPath } from '@/shared/lib'
import { IconButton, Logo } from '@/shared/ui'
import { useNavigate } from 'react-router'
import { FC } from 'react'
import cn from 'classnames'

import css from './styles.module.scss'

export const Header: FC<IWithClassname> = ({ className }) => {
	const navigate = useNavigate()

	const handleMenuClick = () => {
		navigate(routesPath.menu)
	}

	return (
		<header className={cn('container', css.header, className)}>
			<div className={css.header__container}>
				<div className={css.header__left}>
					<IconButton
						iconId='menu'
						onClick={handleMenuClick}
						className={css.header__menu}
					>
						меню
					</IconButton>
				</div>
				<Logo className={css.header__logo} />
				<div className={css.header__right}>
					<IconButton
						isReversed={true}
						iconId='journal'
						className={css.header__journal}
					>
						Бортовой журнал
					</IconButton>
					<IconButton
						isReversed={true}
						iconId='personal-account'
						className={css.header__pa}
					>
						Личный кабинет
					</IconButton>
				</div>
			</div>
		</header>
	)
}
