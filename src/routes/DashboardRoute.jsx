import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Header from '../components/section/Header'
import Navbar from '../components/section/Navbar'

const DashboardRoute = () => {
    return (
        <div>
            <Header />
            <div className="flex justify-between">
                <Navbar />
                <div className="relative w-[80%] h-[100vh] overflow-y-auto">
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default DashboardRoute