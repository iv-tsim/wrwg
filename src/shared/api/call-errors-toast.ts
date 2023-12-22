import { toast } from 'react-toastify'
import { isCommonError } from './is-common-error'

export const callErrorToast = (errorData: unknown) => {
	if (isCommonError(errorData)) {
		toast.error(errorData.response?.data.errors.map(error => error.detail).join('; '))
	} else {
		toast.error('Что-то пошло не так')
	}
}
