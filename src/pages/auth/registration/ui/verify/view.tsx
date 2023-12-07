import { CommonAuthLayout } from '@/shared/layouts'
import { useVerifyUser } from '../../api/useVerifyRegistration'
import { callErrorToast } from '@/shared/helpers'
import { useRegisterUser } from '../../api'
import { useRegisterState } from '../../model'
import { useNavigate } from 'react-router'
import { routesPath } from '@/shared/lib'
import { CodeForm } from '@/features'

export const AuthRegistrationVerify = () => {
	const navigate = useNavigate()
	const info = useRegisterState(state => state.info)
	const setStep = useRegisterState(state => state.setStep)

	const verifyMutation = useVerifyUser()
	const registerMutation = useRegisterUser()

	const handleFormSubmit = async (code: string) => {
		try {
			await verifyMutation.mutateAsync({
				code,
				email: info!.email,
			})

			navigate(routesPath.home)
		} catch (error) {
			callErrorToast(error)
		}
	}

	const handleRetryClick = async () => {
		try {
			await registerMutation.mutateAsync(info!)
		} catch (error) {
			callErrorToast(error)
		}
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
