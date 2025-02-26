import { useState } from "react";
import React from "react";
import { createContext } from "react";

export const Context = createContext()

export const AuthContext = ({ children }) => {
    const data = localStorage.getItem("token")
    const [token, setToken] = useState(data ? JSON.parse(data) : null)

    localStorage.setItem("token", JSON.stringify(token))
    return (
        <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>
    )
}