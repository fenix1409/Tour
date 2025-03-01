import React, { useContext } from 'react'
import './App.css'
import { Context } from './context/useContext'
import Dashboard from './pages/Dashboard/Dashboard'
import SignIn from './pages/SignIn/SignIn'
import DashboardRoute from './routes/DashboardRoute'

function App() {
  const { authToken } = useContext(Context)
  
  if (!authToken) {
    return <SignIn />
  }
  else {
    return <DashboardRoute />
  }
}

export default App
