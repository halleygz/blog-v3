import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'

const useGetBlog = () => {
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        const getBlog = async () => {
            setLoading(true)
            try {
                const res = await fetch(`/api/blog/read/${id}`)
                const data = await res.json()
                if (data.error) throw new Error(data.error)
                setBlog(data)
            } catch(error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }

        }
        getBlog()
    },[])
  return {loading, blog}
}

export default useGetBlog