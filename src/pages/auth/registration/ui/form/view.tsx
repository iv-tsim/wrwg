import { FC } from 'react'
import { ComplicatedButton, Input } from '@/shared/ui'
import { AuthRegisterLayout } from '../layout'
import { Circle } from '../circle'
import { Team } from '../team'
import { TRegisterFields, registerSchema, useRegisterState } from '../../model'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRegisterUser } from '../../api'
import { callErrorToast } from '@/shared/helpers'

import css from './styles.module.scss'

export const AuthRegistrationForm: FC = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<TRegisterFields>({
		resolver: zodResolver(registerSchema),
		mode: 'onBlur',
	})

	const team = useRegisterState(state => state.team)
	const setInfo = useRegisterState(state => state.setInfo)
	const setStep = useRegisterState(state => state.setStep)

	const registerMutation = useRegisterUser()

	const handleFormSubmit = handleSubmit(
		async ({ email, fullName, password, username }) => {
			try {
				const info = {
					email,
					fullName,
					password,
					username,
					team: team!.id,
				}
				await registerMutation.mutateAsync(info)
				setInfo(info)
				setStep('verify')
			} catch (error) {
				callErrorToast(error)
			}
		}
	)

	return (
		<AuthRegisterLayout title='Заполни данные'>
			{{
				bottom: (
					<ComplicatedButton
						onClick={handleFormSubmit}
						disabled={registerMutation.isPending}
					>
						Старт
					</ComplicatedButton>
				),
				children: (
					<form action='#' className={css.wrapper} onSubmit={handleFormSubmit}>
						<div className={css.wrapper__left}>
							<Input
								className={css.wrapper__input}
								placeholder='Имя пилота'
								error={errors.fullName?.message}
								{...register('fullName')}
							/>
							<Input
								className={css.wrapper__input}
								placeholder='позывной пилота'
								error={errors.username?.message}
								{...register('username')}
							/>
							<Input
								className={css.wrapper__input}
								placeholder='Межгалактическая почта'
								type='email'
								error={errors.email?.message}
								{...register('email')}
							/>
						</div>
						<Circle className={css.wrapper__circle}>
							<Team
								isBig={true}
								image={team!.image.registration}
								name={team!.name}
								className={css.wrapper__team}
							/>
						</Circle>
						<div className={css.wrapper__right}>
							<Input
								className={css.wrapper__input}
								placeholder='пароль'
								type='password'
								error={errors.password?.message}
								{...register('password')}
							/>
							<Input
								className={css.wrapper__input}
								placeholder='повтор пароля'
								type='password'
								error={errors.password_confirm?.message}
								{...register('password_confirm')}
							/>
						</div>
					</form>
				),
			}}
		</AuthRegisterLayout>
	)
}
