import { passwordSchema, usernameSchema } from '@/shared/config'
import { z } from 'zod'

export const loginSchema = z.object({
	username: usernameSchema,
	password: passwordSchema,
})

export type TLoginFields = z.infer<typeof loginSchema>
