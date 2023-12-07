import { CommonAuthLayout, RedirectIfLoggedIn } from '@/shared/layouts'
import { CustomLink, Input, MainButton, TextButton } from '@/shared/ui'
import { routesPath } from '@/shared/lib'
import { useNavigate } from 'react-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TLoginFields, loginSchema } from '../model'
import { useLoginUser } from '../api'
import { useAuth } from '@/entities'
import { callErrorToast } from '@/shared/helpers'
import { ACCESS_TOKEN } from '@/shared/config'

import css from './styles.module.scss'

export const AuthLogin = () => {
	const logInUser = useAuth(state => state.logIn)
	const navigate = useNavigate()

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<TLoginFields>({
		resolver: zodResolver(loginSchema),
		mode: 'onBlur',
	})

	const loginMutation = useLoginUser()

	const handleBackButtonClick = () => {
		navigate(routesPath.auth)
	}

	const handleFormSubmit = handleSubmit(async ({ login, password }) => {
		try {
			const response = await loginMutation.mutateAsync({
				password,
				username: login,
			})
			localStorage.setItem(ACCESS_TOKEN, response.access)
			logInUser()
		} catch (error) {
			callErrorToast(error)
		}
	})

	return (
		<RedirectIfLoggedIn>
			<CommonAuthLayout
				title='Авторизация'
				optional={
					<TextButton iconId='arrow-back' onClick={handleBackButtonClick}>
						назад
					</TextButton>
				}
			>
				<div className={css.wrapper}>
					<form
						action='#'
						className={css.wrapper__form}
						onSubmit={handleFormSubmit}
					>
						<Input
							className={css.wrapper__input}
							placeholder='позывной пилота'
							error={errors.login?.message}
							{...register('login')}
						/>
						<Input
							className={css.wrapper__input}
							placeholder='пароль'
							type='password'
							error={errors.password?.message}
							{...register('password')}
						/>
						<div className={css.wrapper__bottom}>
							<MainButton
								className={css.wrapper__submit}
								type='submit'
								disabled={loginMutation.isPending}
							>
								вход
							</MainButton>
							<CustomLink
								to={routesPath.auth_change_password}
								className={css.wrapper__link}
							>
								Забыли пароль?
							</CustomLink>
						</div>
					</form>
				</div>
			</CommonAuthLayout>
		</RedirectIfLoggedIn>
	)
}
