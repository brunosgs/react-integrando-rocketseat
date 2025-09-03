import { z } from 'zod'

export const singUpSchema = z.object({
   restaurantName: z.string(),
   managerName: z.string(),
   phone: z.string(),
   email: z.email(),
})

export type SingUpSchemaModel = z.infer<typeof singUpSchema>
