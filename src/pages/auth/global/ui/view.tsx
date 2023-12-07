import { CommonAuthLayout, RedirectIfLoggedIn } from '@/shared/layouts'
import { routesPath } from '@/shared/lib'
import { MainButton } from '@/shared/ui'
import { useNavigate } from 'react-router'

import css from './styles.module.scss'

export const Auth = () => {
	const navigate = useNavigate()

	const handleLoginClick = () => {
		navigate(routesPath.auth_login)
	}

	const handleRegistrationClick = () => {
		navigate(routesPath.auth_registration)
	}

	return (
		<RedirectIfLoggedIn>
			<CommonAuthLayout title='Авторизация'>
				<div className={css.wrapper}>
					<MainButton
						variant='transparent'
						className={css.wrapper__button}
						onClick={handleLoginClick}
					>
						уже есть корабль
					</MainButton>
					<MainButton
						className={css.wrapper__button}
						onClick={handleRegistrationClick}
					>
						регистрация
					</MainButton>
				</div>
			</CommonAuthLayout>
		</RedirectIfLoggedIn>
	)
}
