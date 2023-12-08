import { CODE_LENGTH, CODE_LENGTH_ERROR } from '@/shared/config'
import { z } from 'zod'

export const codeSchema = z.object({
    code: z
        .string()
        .length(CODE_LENGTH, CODE_LENGTH_ERROR)
        .regex(/^\d+$/, 'Поле должно содержать только цифры'),
})

export type TCodeFields = z.infer<typeof codeSchema>
