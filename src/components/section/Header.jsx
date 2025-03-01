import { Input } from 'antd'
import React from 'react'
import { Bell } from '../../assets/Icons'
import DateTimeDisplay from '../ui/DateTimeDisplay'

const Header = () => {
    return (
        <header className='flex items-center justify-between py-[20px] px-[30px] bg-white'>
            <div className="flex items-center gap-[30px]">
                <h1 className='text-[20px] leading-[27px] font-extrabold text-[#5350DE]'>Dash<span className='text-black'>Board</span></h1>
                <p className='text-[26px] leading-[31px] font-semibold text-[#151515]'>Tour List</p>
            </div>
            <div className="flex items-center gap-[20px]">
                <Input size='large' className='border-[#71809666] border-[1px] !rounded-[18px] !w-[315px]' allowClear autoComplete='off' placeholder='Search' />
                <button><Bell /></button>
                <DateTimeDisplay />
            </div>
        </header>
    )
}

export default Header