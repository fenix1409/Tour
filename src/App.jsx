import React, { useContext } from 'react'
import './App.css'
import { Context } from './context/useContext'
import Dashboard from './pages/Dashboard/Dashboard'
import SignIn from './pages/SignIn/SignIn'

function App() {
  const { authToken } = useContext(Context)
  
  if (!authToken) {
    return <SignIn />
  }
  else {
    return <Dashboard />
  }
}

export default App
