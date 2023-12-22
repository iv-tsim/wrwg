import { Input, MainButton } from '@/shared/ui'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { mainSchema } from '../../model/main-schema'
import { useAuthResetPasswordState } from '../../model'
import { useNavigate } from 'react-router'
import { routesPath } from '@/shared/routing'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/shared/api'
import cn from 'classnames'

import type { TMainSchemaFields } from '../../model/main-schema'

import css from './styles.module.scss'

export const MainForm = () => {
	const email = useAuthResetPasswordState(state => state.email)
	const navigate = useNavigate()

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<TMainSchemaFields>({
		resolver: zodResolver(mainSchema),
		mode: 'onBlur',
	})

	const passwordSetMutation = useMutation({
		mutationFn: api.changePassword.set,
		onSuccess: () => navigate(routesPath.auth_login),
	})

	const handleFormSubmit = handleSubmit(({ password }) => {
		passwordSetMutation.mutate({
			email,
			newPassword: password,
		})
	})

	const handleCancelButtonClick = () => {
		navigate(routesPath.auth_login)
	}

	return (
		<form action='#' className={css.form} onSubmit={handleFormSubmit}>
			<div className={css.form__main}>
				<Input
					placeholder='Новый пароль'
					className={css.form__input}
					error={errors.password?.message}
					type='password'
					{...register('password')}
				/>
				<Input
					placeholder='повтор пароля'
					className={css.form__input}
					error={errors.password_confirm?.message}
					type='password'
					{...register('password_confirm')}
				/>
			</div>
			<div className={css.form__bottom}>
				<MainButton
					variant='transparent-light'
					className={cn(css.form__cancel, css.form__button)}
					type='button'
					onClick={handleCancelButtonClick}
					shrinkPaddingMobile={true}
				>
					отмена
				</MainButton>
				<MainButton
					className={cn(css.form__submit, css.form__button)}
					type='submit'
					disabled={passwordSetMutation.isPending}
					shrinkPaddingMobile={true}
				>
					сохранить
				</MainButton>
			</div>
		</form>
	)
}
