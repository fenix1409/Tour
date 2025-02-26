import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../pages/SignIn/Register'
import SingIn from '../pages/SignIn/SignIn'

const LoginRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<SingIn />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )
}

export default LoginRoutes