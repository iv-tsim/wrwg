import { routesPath } from '@/shared/lib'
import { Input, MainButton, Typography } from '@/shared/ui'
import { useNavigate } from 'react-router'
import {
	TEmailFields,
	emailSchema,
	useAuthResetPasswordState,
} from '../../model'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { usePasswordReset } from '../../api/'
import { callErrorToast } from '@/shared/helpers'

import css from './styles.module.scss'

export const EmailForm = () => {
	const setEmail = useAuthResetPasswordState(state => state.setEmail)
	const setStep = useAuthResetPasswordState(state => state.setStep)

	const navigate = useNavigate()

	const passwordResetMutation = usePasswordReset()

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

	const handleFormSubmit = handleSubmit(async ({ email }) => {
		try {
			await passwordResetMutation.mutateAsync({
				email,
			})
			setEmail(email)
			setStep('code')
		} catch (error) {
			callErrorToast(error)
		}
	})

	return (
		<div className={css.wrapper}>
			<Typography variant='text' className={css.wrapper__text}>
				Введите почту, на которую зарегистрирован аккаунт, на нее придет код для
				сброса пароля
			</Typography>
			<form
				action='#'
				className={css.wrapper__form}
				onSubmit={handleFormSubmit}
			>
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
						variant='transparent'
						className={css.wrapper__cancel}
					>
						отмена
					</MainButton>
					<MainButton
						type='submit'
						className={css.wrapper__submit}
						disabled={passwordResetMutation.isPending}
					>
						Отправить
					</MainButton>
				</div>
			</form>
		</div>
	)
}
