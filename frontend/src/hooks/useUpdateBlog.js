import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

const useUpdateBlog = () => {
    const [updateloading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {id}= useParams()
    const editBlog = async (inputs) => {
        const {title, content, tags} = inputs
        const success = handleUserInput({title, content})
        if(!success) return
        setLoading(true)
        try{
            const res = await fetch(`/api/blog/edit/${id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title, content, tags
                })
            })
            if(!res) throw new Error("resoponse not ok")
            const data = await res.json()
            if(data.error){
                console.log("Error", data.error)
                toast.error(data.error)
                return
            }
            console.log("blog edited", data)
            toast.success(data.message)
            navigate(`/read/${id}`)
        } catch (err) {
            console.log("couldn't edit blog", err)
            toast.error('failed to edit blog')
        } finally {
            setLoading(false)
        }
    }
    
    const deleteBlog = async()=>{
        setLoading(true)
        try{
            const res = await fetch(`/api/blog/edit/${id}/delete`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            })
            const data = await res.json()
            if(data.error){
                console.log("Error", data.error)
                toast.error(data.error)
                return
            }
            console.log("blog deleted", data)
            toast.success("Blog deleted")
            navigate("/feed")
        } catch (err) {
            console.log("Couldn't delete blog", err)
            toast.error('faild to delete blog')
        } finally {
            setLoading(false)
        }
    }

    return {updateloading, editBlog, deleteBlog}
}

function handleUserInput({title, content}) {
    if(!title || !content) {
        toast.error("Please fill all the required fields")
        return false
    }
    return true
}


export default useUpdateBlog