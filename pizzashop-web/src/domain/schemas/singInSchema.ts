import { z } from 'zod'

export const singInSchema = z.object({
   email: z.email(),
})

export type SingInSchemaModel = z.infer<typeof singInSchema>
