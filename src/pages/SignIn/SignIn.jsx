import { Input } from "antd"
import React, { useState } from "react"
import { instance } from "../../hook/instance"

const SignIn = () => {
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")

  async function handleSubmitForm(e) {
    e.preventDefault()
    const formattedPhone = phone.replace(/\D/g, "").slice(-9)
    const loginData = { password, phone_number: formattedPhone }
    try {
      const response = await instance().post("/auth/signin", loginData)
      if (response.status === 200) {
        const token = response.data.data.tokens.accessToken.token
        localStorage.setItem("token", token)
        window.location.pathname = "/dashboard"
      } else {
        console.log("Error occurred")
      }
    } catch (err) {
      console.error("Login error:", err)
    }
  }

  return (
    <div className="">
      <form onSubmit={handleSubmitForm} className="w-[540px] px-[72px] py-[48px] bg-white rounded-[20px] inset-0 m-auto mt-[107px]">
        <h2 className="text-[28px] leading-[28px] font-semibold text-[#101828] text-center mb-8">Login to your account</h2>
        <label className="mb-[24px] inline-block">
          <strong className="text-[16px] leading-[16px] inline-block mb-[12px] text-[#344054]">Phone Number</strong>
          <Input className="!w-[396px]" autoComplete="off" placeholder="+998 (__) ___-__-__" onChange={(e) => setPhone(e.target.value)} type="tel" size="large"/>
        </label>
        <label className="mb-[32px] inline-block">
          <strong className="text-[16px] leading-[16px] inline-block mb-[12px] text-[#344054]">Password</strong>
          <Input.Password className="!w-[396px]" autoComplete="off" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} size="large"/>
        </label>
        <button type="submit" className="w-[396px] py-[18px] px-[157px] bg-[#1570EF] text-white text-[16px] leading-[16px] font-semibold inline-block mx-auto cursor-pointer">Login now</button>
      </form>
    </div>
  )
}

export default SignIn