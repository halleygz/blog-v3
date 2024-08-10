import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
const useGetAllBlogs = () => {
    const [loading, setLoading] = useState(false)
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        const getAllBlogs = async () => {
            setLoading(true)
            try {
                const res = await fetch('/api/blog/read')
                const data = await res.json()
                if(data.error) throw new Error(data.error)
                setBlogs(data)
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }
        getAllBlogs()
    },[])

    return {loading, blogs}
}

export default useGetAllBlogs