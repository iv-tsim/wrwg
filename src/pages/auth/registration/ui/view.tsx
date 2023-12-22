import { AuthRegistrationSlider } from './slider'
import { AuthRegistrationForm } from './form'
import { AuthRegistrationVerify } from './verify'
import { useRegisterState } from '../model'

export const AuthRegistration = () => {
	const step = useRegisterState(state => state.step)

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
