import { Input, MainButton } from '@/shared/ui'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TMainSchemaFields, mainSchema } from '../../model/mainSchema'
import { usePasswordSet } from '../../api/'
import { useAuthResetPasswordState } from '../../model'
import { callErrorToast } from '@/shared/helpers'
import { useNavigate } from 'react-router'
import { routesPath } from '@/shared/lib'

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

	const passwordSetMutation = usePasswordSet()

	const handleFormSubmit = handleSubmit(async ({ password }) => {
		try {
			await passwordSetMutation.mutateAsync({
				email,
				newPassword: password,
			})
			navigate(routesPath.auth_login)
		} catch (error) {
			callErrorToast(error)
		}
	})

	const handleCancelButtonClick = () => {
		navigate(routesPath.auth_login)
	}

	return (
		<form action='#' className={css.form} onSubmit={handleFormSubmit}>
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
			<div className={css.form__bottom}>
				<MainButton
					variant='transparent'
					className={css.form__cancel}
					type='button'
					onClick={handleCancelButtonClick}
				>
					отмена
				</MainButton>
				<MainButton
					className={css.form__submit}
					type='submit'
					disabled={passwordSetMutation.isPending}
				>
					сохранить
				</MainButton>
			</div>
		</form>
	)
}
