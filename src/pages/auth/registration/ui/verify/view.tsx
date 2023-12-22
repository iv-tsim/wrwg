import { CommonAuthLayout } from '@/shared/layouts'
import { useRegisterState } from '../../model'
import { CodeForm } from '@/features/forms'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/shared/api'
import { ACCESS_TOKEN } from '@/shared/config'
import { useSession } from '@/entities'

export const AuthRegistrationVerify = () => {
	const logInUser = useSession(state => state.logIn)
	const info = useRegisterState(state => state.info)
	const setStep = useRegisterState(state => state.setStep)

	const loginMutation = useMutation({
		mutationFn: api.auth.login,
		onSuccess: response => {
			localStorage.setItem(ACCESS_TOKEN, response.access)
			logInUser()
		},
	})

	const verifyMutation = useMutation({
		mutationFn: api.auth.verifyRegistration,
		onSuccess: () => {
			loginMutation.mutate({
				password: info!.password,
				username: info!.username,
			})
		},
	})

	const registerMutation = useMutation({
		mutationFn: api.auth.register,
	})

	const handleFormSubmit = async (code: string) => {
		verifyMutation.mutate({
			code,
			email: info!.email,
		})
	}

	const handleRetryClick = () => {
		registerMutation.mutate(info!)
	}

	return (
		<CommonAuthLayout title='Подтверждение почты'>
			<CodeForm
				onRetry={handleRetryClick}
				onCancel={() => setStep('form')}
				onSubmit={handleFormSubmit}
				text='Для завершения процесса регистрации введите код, который пришел вам на почту '
			/>
		</CommonAuthLayout>
	)
}
