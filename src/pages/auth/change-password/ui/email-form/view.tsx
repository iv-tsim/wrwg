import { routesPath } from '@/shared/routing'
import { Input, MainButton, Typography } from '@/shared/ui'
import { useNavigate } from 'react-router'
import { emailSchema, useAuthResetPasswordState } from '../../model'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/shared/api'
import cn from 'classnames'

import type { TEmailFields } from '../../model'

import css from './styles.module.scss'

export const EmailForm = () => {
	const setEmail = useAuthResetPasswordState(state => state.setEmail)
	const setStep = useAuthResetPasswordState(state => state.setStep)

	const navigate = useNavigate()

	const passwordResetMutation = useMutation({
		mutationFn: api.changePassword.reset,
		onSuccess: (_, variables) => {
			setEmail(variables.email)
			setStep('code')
		},
	})

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<TEmailFields>({
		resolver: zodResolver(emailSchema),
		mode: 'onBlur',
	})

	const handleCancelButtonClick = () => {
		navigate(routesPath.auth_login)
	}

	const handleFormSubmit = handleSubmit(({ email }) => {
		passwordResetMutation.mutate({
			email,
		})
	})

	return (
		<div className={css.wrapper}>
			<Typography variant='text' className={css.wrapper__text}>
				Введите почту, на которую зарегистрирован аккаунт, на нее придет код для сброса пароля
			</Typography>
			<form action='#' className={css.wrapper__form} onSubmit={handleFormSubmit}>
				<Input
					placeholder='Межгалактическая почта'
					error={errors.email?.message}
					className={css.wrapper__input}
					{...register('email')}
				/>
				<div className={css.wrapper__bottom}>
					<MainButton
						type='button'
						onClick={handleCancelButtonClick}
						variant='transparent-light'
						className={cn(css.wrapper__button, css.wrapper__cancel)}
						shrinkPaddingMobile={true}
					>
						отмена
					</MainButton>
					<MainButton
						type='submit'
						className={cn(css.wrapper__button, css.wrapper__submit)}
						disabled={passwordResetMutation.isPending}
						shrinkPaddingMobile={true}
					>
						Отправить
					</MainButton>
				</div>
			</form>
		</div>
	)
}
