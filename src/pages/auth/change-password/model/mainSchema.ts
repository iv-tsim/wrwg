import {
	EMPTY_FIELD_ERROR,
	MIN_CHARS_PASSWORD,
	MIN_CHARS_PASSWORD_ERROR,
} from '@/shared/config'
import { z } from 'zod'

export const mainSchema = z
	.object({
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

export type TMainSchemaFields = z.infer<typeof mainSchema>
