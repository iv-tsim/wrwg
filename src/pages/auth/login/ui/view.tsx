import { CommonAuthLayout } from '@/shared/layouts'
import { CustomLink, Input, MainButton, TextButton } from '@/shared/ui'
import { routesPath } from '@/shared/routing'
import { useNavigate } from 'react-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../model'
import { useSession } from '@/entities/session'
import { ACCESS_TOKEN } from '@/shared/config'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/shared/api'

import type { TLoginFields } from '../model'

import css from './styles.module.scss'

export const AuthLogin = () => {
	const logInUser = useSession(state => state.logIn)
	const navigate = useNavigate()

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<TLoginFields>({
		resolver: zodResolver(loginSchema),
		mode: 'onBlur',
	})

	const loginMutation = useMutation({
		mutationFn: api.auth.login,
		onSuccess: response => {
			localStorage.setItem(ACCESS_TOKEN, response.access)
			logInUser()
		},
	})

	const handleBackButtonClick = () => {
		navigate(routesPath.auth)
	}

	const handleFormSubmit = handleSubmit(({ username, password }) => {
		loginMutation.mutate({
			password,
			username,
		})
	})

	return (
		<CommonAuthLayout
			title='Авторизация'
			optional={
				<TextButton iconId='arrow-back' onClick={handleBackButtonClick}>
					назад
				</TextButton>
			}
		>
			<div className={css.wrapper}>
				<form action='#' className={css.wrapper__form} onSubmit={handleFormSubmit}>
					<Input
						className={css.wrapper__input}
						placeholder='позывной пилота'
						error={errors.username?.message}
						{...register('username')}
						autoComplete='username'
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
						<CustomLink to={routesPath.auth_change_password} className={css.wrapper__link}>
							Забыли пароль?
						</CustomLink>
					</div>
				</form>
			</div>
		</CommonAuthLayout>
	)
}
