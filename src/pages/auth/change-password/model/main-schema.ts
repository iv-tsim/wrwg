import { passwordSchema } from '@/shared/config'
import { z } from 'zod'

export const mainSchema = z
	.object({
		password: passwordSchema,
		password_confirm: passwordSchema,
	})
	.refine(data => data.password === data.password_confirm, {
		message: 'Пароли должны совпадать',
		path: ['password_confirm'],
	})

export type TMainSchemaFields = z.infer<typeof mainSchema>
