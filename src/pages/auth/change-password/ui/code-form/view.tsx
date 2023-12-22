import { CodeForm as ActualCodeForm } from '@/features/forms'
import { useNavigate } from 'react-router'
import { useAuthResetPasswordState } from '../../model'
import { routesPath } from '@/shared/routing'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/shared/api'

export const CodeForm = () => {
	const navigate = useNavigate()
	const setStep = useAuthResetPasswordState(state => state.setStep)
	const email = useAuthResetPasswordState(state => state.email)

	const codeConfirmMutation = useMutation({
		mutationFn: api.changePassword.confirmCode,
		onSuccess: () => setStep('form'),
	})

	const passwordResetMutation = useMutation({
		mutationFn: api.changePassword.reset,
	})

	const handleFormSubmit = (code: string) => {
		codeConfirmMutation.mutate({
			code,
			email,
		})
	}

	const handleRetryClick = () => {
		passwordResetMutation.mutate({
			email,
		})
	}

	return (
		<ActualCodeForm
			onCancel={() => navigate(routesPath.auth_login)}
			onRetry={handleRetryClick}
			onSubmit={handleFormSubmit}
			text='Введите код, который пришел вам на&nbsp;почту'
		/>
	)
}
