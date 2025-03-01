import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { AuthContext } from './context/useContext.jsx'
import { QueryProvider } from './query/QueryProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContext>
      <QueryProvider>
        <App />
      </QueryProvider>
    </AuthContext>
  </BrowserRouter>
)
