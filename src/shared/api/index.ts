import * as auth from './auth'
import * as changePassword from './change-password'
import * as company from './company'
import * as user from './user'
import * as rating from './rating'
import * as quiz from './quiz'

export const api = {
	auth,
	changePassword,
	company,
	user,
	rating,
	quiz,
}

export { callErrorToast } from './call-errors-toast'
export { isCommonError } from './is-common-error'
