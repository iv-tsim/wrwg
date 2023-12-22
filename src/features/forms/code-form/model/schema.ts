import { codeSchema as actualCodeSchema } from '@/shared/config'
import { z } from 'zod'

export const codeSchema = z.object({
	code: actualCodeSchema,
})

export type TCodeFields = z.infer<typeof codeSchema>
