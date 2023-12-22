import { CommonAuthLayout } from '@/shared/layouts'
import { routesPath } from '@/shared/routing'
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
		<CommonAuthLayout title='Авторизация'>
			<div className={css.wrapper}>
				<MainButton
					variant='transparent-light'
					className={css.wrapper__button}
					onClick={handleLoginClick}
				>
					уже есть корабль
				</MainButton>
				<MainButton className={css.wrapper__button} onClick={handleRegistrationClick}>
					регистрация
				</MainButton>
			</div>
		</CommonAuthLayout>
	)
}
