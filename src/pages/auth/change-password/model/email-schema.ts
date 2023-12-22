import { z } from 'zod'
import { emailSchema as actualEmailSchema } from '@/shared/config'

export const emailSchema = z.object({
	email: actualEmailSchema,
})

export type TEmailFields = z.infer<typeof emailSchema>
