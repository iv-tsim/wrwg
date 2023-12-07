import { toast } from 'react-toastify'
import { isCommonError } from './isCommonError'

export const callErrorToast = (errorData: unknown) => {
	if (isCommonError(errorData)) {
		toast.error(
			errorData.response?.data.errors.map(error => error.detail).join('; ')
		)
	}
}
