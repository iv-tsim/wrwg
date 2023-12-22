import { CommonAuthLayout } from '@/shared/layouts'
import { useAuthResetPasswordState } from '../model'
import { EmailForm } from './email-form'
import { CodeForm } from './code-form'
import { MainForm } from './main-form'
import { useEffect } from 'react'

export const AuthChangePassword = () => {
	const step = useAuthResetPasswordState(state => state.step)
	const reset = useAuthResetPasswordState(state => state.reset)

	useEffect(() => {
		return () => {
			reset()
		}
	}, [reset])

	const render = () => {
		if (step === 'email') {
			return <EmailForm />
		}

		if (step === 'code') {
			return <CodeForm />
		}

		if (step === 'form') {
			return <MainForm />
		}
	}

	return <CommonAuthLayout title='Сброс пароля'>{render()}</CommonAuthLayout>
}
