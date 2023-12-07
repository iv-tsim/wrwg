import { CodeForm as ActualCodeForm } from '@/features'
import { useNavigate } from 'react-router'
import { useCodeConfirm, usePasswordReset } from '../../api'
import { useAuthResetPasswordState } from '../../model'
import { routesPath } from '@/shared/lib'
import { callErrorToast } from '@/shared/helpers'

export const CodeForm = () => {
	const navigate = useNavigate()
	const setStep = useAuthResetPasswordState(state => state.setStep)
	const email = useAuthResetPasswordState(state => state.email)

	const codeConfirmMutation = useCodeConfirm()
	const passwordResetMutation = usePasswordReset()

	const handleFormSubmit = async (code: string) => {
		try {
			await codeConfirmMutation.mutateAsync({
				code,
				email,
			})

			setStep('form')
		} catch (error) {
			callErrorToast(error)
		}
	}

	const handleRetryClick = async () => {
		try {
			await passwordResetMutation.mutateAsync({
				email,
			})
		} catch (error) {
			callErrorToast(error)
		}
	}

	return (
		<ActualCodeForm
			onCancel={() => navigate(routesPath.auth_login)}
			onRetry={handleRetryClick}
			onSubmit={handleFormSubmit}
			text='Введите код, который пришел вам на почту'
		/>
	)
}
