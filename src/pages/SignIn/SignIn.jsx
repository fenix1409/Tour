import { Input } from 'antd'
import React, { useState } from 'react'

const SignIn = () => {
  const [number, setNumber] = useState("")
  const [phone, setPhone] = useState("")

  function handleSubmitForm(){
    
  }
  return (
    <div className="">
      <form onSubmit={handleSubmitForm} className='w-[540px] px-[72px] py-[48px] bg-white rounded-[20px] inset-0 m-auto mt-[107px]'>
        <h2 className='text-[28px] leading-[28px] font-semibold text-[#101828] text-center mb-8'>Login to your account</h2>
        <label className='mb-[24px] inline-block'>
          <strong className='text-[16px] leading-[16px] inline-block mb-[12px] text-[#344054]'>Phone Number</strong>
          <Input placeholder='+998 (__) (___) (__) (__)' onChange={(e) => setPhone(e.target.value)} type='number'/>
        </label>
        <label className='mb-[32px] inline-block'>
          <strong className='text-[16px] leading-[16px] inline-block mb-[12px] text-[#344054]'>Password</strong>
          <Input.Password placeholder='balamia@gmail.com' onChange={(e) => setNumber(e.target.value)} />
        </label>
      </form>
    </div>
  )
}

export default SignIn