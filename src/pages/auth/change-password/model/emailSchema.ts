import { EMPTY_FIELD_ERROR } from '@/shared/config'
import { z } from 'zod'

export const emailSchema = z.object({
	email: z.string().min(1, EMPTY_FIELD_ERROR),
})

export type TEmailFields = z.infer<typeof emailSchema>
