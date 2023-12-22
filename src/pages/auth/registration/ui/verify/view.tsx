import { CommonAuthLayout } from '@/shared/layouts'
import { useRegisterState } from '../../model'
import { useNavigate } from 'react-router'
import { routesPath } from '@/shared/routing'
import { CodeForm } from '@/features/forms'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/shared/api'

export const AuthRegistrationVerify = () => {
	const navigate = useNavigate()
	const info = useRegisterState(state => state.info)
	const setStep = useRegisterState(state => state.setStep)

	const verifyMutation = useMutation({
		mutationFn: api.auth.verifyRegistration,
		onSuccess: () => {
			navigate(routesPath.home)
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
