import { AuthRegistrationSlider } from './slider'
import { AuthRegistrationForm } from './form'
import { RedirectIfLoggedIn } from '@/shared/layouts'
import { AuthRegistrationVerify } from './verify'
import { useRegisterState } from '../model'

export const AuthRegistration = () => {
	const step = useRegisterState(state => state.step)

	const render = () => {
		if (step === 'slider') {
			return <AuthRegistrationSlider />
		}

		if (step === 'form') {
			return <AuthRegistrationForm />
		}

		if (step === 'verify') {
			return <AuthRegistrationVerify />
		}
	}

	return <RedirectIfLoggedIn>{render()}</RedirectIfLoggedIn>
}
