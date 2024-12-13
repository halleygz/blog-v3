import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const createBlog = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const createBlog = async (inputs) => {
        const {title, content, tagsArray} = inputs
        console.log(tagsArray)
        const success = handleUserInput({title, content})
        if(!success) return
        setLoading(true)
        try{
            const res = await fetch("/api/blog/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title, content, tags: tagsArray,
                })
            })
            if(!res) throw new Error("response not ok")

            const data = await res.json()
            if(data.error){
                console.log("Error", data.error)
                toast.error(data.error)
                return
            }
            console.log("blog created",data)
            toast.success(data.message)
            navigate(`/read/${data._id}`)
        } catch (err){
            console.log("couldn't post", err)
            toast.error('failed to create a blog')
        } finally {
            setLoading(false)
        }
    }
    return {loading, createBlog}
}

function handleUserInput({title, content}) {
    if(!title || !content) {
        toast.error("Please fill all the required fields")
        return false
    }
    return true
}

export default createBlog