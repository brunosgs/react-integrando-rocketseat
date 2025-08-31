import './index.css'

import { Helmet, HelmetProvider } from '@dr.pogodin/react-helmet'
import { RouterProvider } from 'react-router/dom'

import { router } from './routes'

export function App() {
   return (
      <HelmetProvider>
         <Helmet titleTemplate='%s | Pizza shopp'/>
         <RouterProvider router={router} />
      </HelmetProvider>
   )
}
