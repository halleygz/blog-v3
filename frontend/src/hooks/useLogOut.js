import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { toast } from 'react-hot-toast'

const useLogOut = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()
    const logout = async () =>{
        setLoading(true)
        try {
            const res = await fetch("api/auth/logout", {
                method: "POST",
                headers: {"Content-type": "application/json"}
            })
            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.removeItem("blog-user")
            setAuthUser(null)
            toast.success("Logged out successfully")
        } catch (err) {
            toast.error(err.message)
        } finally {
            setLoading(false)
        }
    }
  return {loading, logout}
}

export default useLogOut