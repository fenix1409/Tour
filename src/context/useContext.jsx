import { useState, useEffect } from "react"
import React, { createContext } from "react"

export const Context = createContext()

export const AuthContext = ({ children }) => {
    const data = localStorage.getItem("token")
    let token = null

    // Tokenni olishda JSON.parse ishlatmaslik kerak, chunki token string sifatida saqlanadi
    if (data) {
        token = data // Token string sifatida olinadi
    }
    const [authToken, setAuthToken] = useState(token);
    // Tokenni o'zgarganda faqat saqlash
    useEffect(() => {
        if (authToken) {
            localStorage.setItem("token", authToken) // Tokenni saqlash
        }
    }, [authToken])
    return (
        <Context.Provider value={{ authToken, setAuthToken }}>{children}</Context.Provider>
    )
}