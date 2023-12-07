import {
	EMPTY_FIELD_ERROR,
	MIN_CHARS_PASSWORD,
	MIN_CHARS_PASSWORD_ERROR,
} from '@/shared/config'
import { z } from 'zod'

export const loginSchema = z.object({
	login: z.string().min(1, EMPTY_FIELD_ERROR),
	password: z
		.string()
		.min(1, EMPTY_FIELD_ERROR)
		.min(MIN_CHARS_PASSWORD, MIN_CHARS_PASSWORD_ERROR),
})

export type TLoginFields = z.infer<typeof loginSchema>
