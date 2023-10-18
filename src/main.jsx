import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider.jsx'
import routes from './Routes/routes.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={routes} />
      </AuthProvider>
  
  </React.StrictMode>,
)
