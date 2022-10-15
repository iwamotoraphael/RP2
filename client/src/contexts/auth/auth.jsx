import React , { createContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {api, postLogin} from '../../services/api'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user')

        if(recoveredUser)
            setUser(JSON.parse(recoveredUser))
    }, 
    [])

    const login = async (username, password) => {
        const response = await postLogin(username, password)

        const logged = response.data.user

        localStorage.setItem('user', JSON.stringify(logged))

        navigate('/home')
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
        navigate('/')
    }

    return(
        <AuthContext.Provider value={{authenticated: !!user, login, logout, user }}>{children}</AuthContext.Provider>
    )
}