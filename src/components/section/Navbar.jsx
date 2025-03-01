import React from 'react'
import { Goals, Tour, Transactions } from '../../assets/Icons'
import Destination from '../../assets/images/destination.svg'
import Investments from '../../assets/images/investments.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const pages = [
        {
            id: 1,
            title: "Tour page",
            icon: Tour,
            path: "/"
        },
        {
            id: 2,
            title: "Destination",
            icon: Destination,
            path: "/destination"
        },
        {
            id: 3,
            title: "Transactions",
            icon: Transactions,
            path: "/transactions"
        },
        {
            id: 4,
            title: "Investments",
            icon: Investments,
            path: "/investments"
        },
        {
            id: 5,
            title: "Goals",
            icon: Goals,
            path: "/goals"
        }
    ]

    return (
        <nav className='flex items-center flex-col gap-[20px] bg-white w-[20%] h-[100vh]'>
            {pages.map(item => (
                <NavLink key={item.id} to={item.path} className={({ isActive }) => `flex items-center gap-[17px] w-[240px] py-[13px] pl-[30px] ${isActive ? "text-[#5350DE] font-semibold" : "text-[#718096]"}`}>
                    <div>
                        {item.id === 2 || item.id === 4 ? (
                            <img src={item.icon} alt="icon" width={25} height={25} className={({ isActive }) => isActive ? "filter brightness-0 invert-[40%]" : "filter brightness-0 invert-[60%]"} />
                        ) : (
                            <item.icon size={25} className={({ isActive }) => isActive ? "text-[#5350DE]" : "text-[#718096]"} />)}
                    </div>
                    <h2 className="text-[18px] leading-[21px] font-medium">{item.title}</h2>
                </NavLink>
            ))}
        </nav>
    )
}

export default Navbar