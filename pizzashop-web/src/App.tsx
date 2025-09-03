import './index.css'

import { Helmet, HelmetProvider } from '@dr.pogodin/react-helmet'
import { RouterProvider } from 'react-router/dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export function App() {
   return (
      <HelmetProvider>
         <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
            <Helmet titleTemplate="%s | Pizza shopp" />
            <Toaster richColors position="top-right" expand={false} />
            <RouterProvider router={router} />
         </ThemeProvider>
      </HelmetProvider>
   )
}
