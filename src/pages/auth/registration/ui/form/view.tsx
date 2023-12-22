import { ComplicatedButton, Input } from '@/shared/ui'
import { AuthRegisterLayout } from '../layout'
import { Circle } from '../circle'
import { Team } from '../team'
import { registerSchema, useRegisterState } from '../../model'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useMobile } from '@/shared/hooks'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/shared/api'

import type { TRegisterFields } from '../../model'
import type { FC } from 'react'

import css from './styles.module.scss'

export const AuthRegistrationForm: FC = () => {
	const team = useRegisterState(state => state.team)
	const info = useRegisterState(state => state.info)
	const setInfo = useRegisterState(state => state.setInfo)
	const setStep = useRegisterState(state => state.setStep)

	const isMobile = useMobile(1023)

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<TRegisterFields>({
		resolver: zodResolver(registerSchema),
		mode: 'onBlur',
		defaultValues: {
			email: info?.email,
			fullName: info?.fullName,
			password: info?.password,
			password_confirm: info?.password,
			username: info?.username,
		},
	})

	const registerMutation = useMutation({
		mutationFn: api.auth.register,
		onSuccess: (_, variables) => {
			setInfo(variables)
			setStep('verify')
		},
	})

	const handleFormSubmit = handleSubmit(({ email, fullName, password, username }) => {
		registerMutation.mutate({
			email,
			fullName,
			password,
			username,
			team: team!.id,
		})
	})

	return (
		<AuthRegisterLayout title='Заполни данные' uniqueAdaptive={true}>
			{{
				bottom: !isMobile && (
					<ComplicatedButton onClick={handleFormSubmit} disabled={registerMutation.isPending}>
						Старт
					</ComplicatedButton>
				),
				children: (
					<form action='#' className={css.wrapper} onSubmit={handleFormSubmit}>
						<div className={css.wrapper__left}>
							<div className={css.wrapper__inputs}>
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
									autoComplete='username'
								/>
								<Input
									className={css.wrapper__input}
									placeholder='Межгалактическая почта'
									type='email'
									error={errors.email?.message}
									{...register('email')}
									autoComplete='email'
								/>
							</div>
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
							<div className={css.wrapper__inputs}>
								<Input
									className={css.wrapper__input}
									placeholder='пароль'
									type='password'
									error={errors.password?.message}
									{...register('password')}
									autoComplete='new-password'
								/>
								<Input
									className={css.wrapper__input}
									placeholder='повтор пароля'
									type='password'
									error={errors.password_confirm?.message}
									{...register('password_confirm')}
									autoComplete='new-password'
								/>
							</div>
							<ComplicatedButton
								disabled={registerMutation.isPending}
								className={css.wrapper__submitMobile}
								type='submit'
							>
								Старт
							</ComplicatedButton>
						</div>
					</form>
				),
			}}
		</AuthRegisterLayout>
	)
}
