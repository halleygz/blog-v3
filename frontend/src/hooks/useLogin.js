import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()
    const navigate = useNavigate()
    const login = async (inputs) => {
        const {email, password} = inputs
        const success = handleUserInput({email, password})
        if(!success) {console.log("nosee")}
        setLoading(true)
        try{
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    email, password
                })
            })
            if(!res.ok) {
                throw new Error ('Network response was not ok')
            }
            const data = await res.json()
            if(data.error){
                console.log("Error: ", data.error)
                toast.error(data.error)
                return
            }
            localStorage.setItem("blog-user", JSON.stringify(data))
            setAuthUser(data)
            console.log("Login success:", data)
            toast.success("Login successful")
            navigate("/")
        } catch (err) {
            console.error("Login error", err)
            toast.error("Login failed. Please try again")
        } finally {
            setLoading(false)
        }
        
    }
  return {loading, login}
}

function handleUserInput({email, password}){
    if(!email || !password) {
        console("nosee")
        toast.error("Please fill all required fields")
        return false
    }
}

export default useLogin