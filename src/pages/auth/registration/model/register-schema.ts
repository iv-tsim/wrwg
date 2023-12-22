import { emailSchema, fullnameSchema, passwordSchema, usernameSchema } from '@/shared/config'
import { z } from 'zod'

export const registerSchema = z
	.object({
		fullName: fullnameSchema,
		username: usernameSchema,
		email: emailSchema,
		password: passwordSchema,
		password_confirm: passwordSchema,
	})
	.refine(data => data.password === data.password_confirm, {
		message: 'Пароли должны совпадать',
		path: ['password_confirm'],
	})

export type TRegisterFields = z.infer<typeof registerSchema>
