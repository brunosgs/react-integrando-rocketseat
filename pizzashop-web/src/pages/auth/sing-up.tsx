import { Helmet } from '@dr.pogodin/react-helmet'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { type SingUpSchemaModel } from '@/domain/schemas/singUpSchema'

export function SingUp() {
   const navigate = useNavigate()
   const {
      register,
      handleSubmit,
      formState: { isSubmitting },
   } = useForm<SingUpSchemaModel>()

   async function handleSingUp(data: SingUpSchemaModel) {
      console.log(data)
      try {
         await new Promise((resolve) => setTimeout(resolve, 2000))

         toast.success('Restaurante cadastrado com sucesso!', {
            action: {
               label: 'Login',
               onClick: () => navigate('/sing-in'),
            },
         })
      } catch {
         toast.error('Erro ao cadastrar restaurante.')
      }
   }

   return (
      <>
         <Helmet title="Cadastro" />
         <div className="p-8">
            <Button variant="ghost" asChild className="absolute right-8 top-8">
               <Link to="/sing-in">Fazer login</Link>
            </Button>
            <div className="flex w-[350px] flex-col justify-center gap-6">
               <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-2xl font-semibold tracking-tight">
                     Criar conta grátis
                  </h1>
                  <p className="text-muted-foreground text-sm">
                     Seja um parceiro e comece suas vendas!
                  </p>
               </div>
               <form
                  className="space-y-4"
                  onSubmit={handleSubmit(handleSingUp)}
               >
                  <div className="space-y-2">
                     <Label htmlFor="email">Nome do estabelecimento</Label>
                     <Input
                        id="restaurantName"
                        type="text"
                        {...register('restaurantName')}
                     />
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="managerName">Seu nome</Label>
                     <Input
                        id="managerName"
                        type="text"
                        {...register('managerName')}
                     />
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="phone">Seu celular</Label>
                     <Input id="phone" type="tel" {...register('phone')} />
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="email">Seu e-mail</Label>
                     <Input id="email" type="email" {...register('email')} />
                  </div>
                  <Button
                     type="submit"
                     className="w-full"
                     disabled={isSubmitting}
                  >
                     Finalizar cadastro
                  </Button>
                  <p className="text-muted-foreground px-6 text-center text-sm leading-relaxed">
                     Ao continuar, você concorda com nossos{' '}
                     <a className="underline underline-offset-4" href="">
                        termos de serviço
                     </a>{' '}
                     e{' '}
                     <a className="underline underline-offset-4" href="">
                        políticas de privacidade
                     </a>
                     .
                  </p>
               </form>
            </div>
         </div>
      </>
   )
}
