import {
	EMPTY_FIELD_ERROR,
	MIN_CHARS_NICKNAME,
	MIN_CHARS_NICKNAME_ERROR,
	MIN_CHARS_PASSWORD,
	MIN_CHARS_PASSWORD_ERROR,
} from '@/shared/config'
import { z } from 'zod'

export const registerSchema = z
	.object({
		fullName: z.string().min(1, EMPTY_FIELD_ERROR),
		username: z
			.string()
			.min(1, EMPTY_FIELD_ERROR)
			.min(MIN_CHARS_NICKNAME, MIN_CHARS_NICKNAME_ERROR),
		email: z
			.string()
			.min(1, EMPTY_FIELD_ERROR)
			.email(`Поле должно являться e-mail'ом`),
		password: z
			.string()
			.min(1, EMPTY_FIELD_ERROR)
			.min(MIN_CHARS_PASSWORD, MIN_CHARS_PASSWORD_ERROR),
		password_confirm: z
			.string()
			.min(1, EMPTY_FIELD_ERROR)
			.min(MIN_CHARS_PASSWORD, MIN_CHARS_PASSWORD_ERROR),
	})
	.refine(data => data.password === data.password_confirm, {
		message: 'Пароли должны совпадать',
		path: ['password_confirm'],
	})

export type TRegisterFields = z.infer<typeof registerSchema>
