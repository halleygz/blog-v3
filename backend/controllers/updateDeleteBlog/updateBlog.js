import Blog from "../../models/blogs.js";

const editBlog = async (req, res) => {
    try {
        const { title, content, tags} = req.body
        const { username } = req.user
        const { id } = req.params

        const blog = await Blog.updateOne({ _id: id, author: username}, {$set: {
            title, content, tags, updatedAt: Date.now()
        }})
        if(blog){
            res.status(201).json({message: "update success!"})
        } else {
            res.status(401).json({error: "couldn't update blog"})
        }
    } catch(err) {
        console.log("Error occured in updateBlog, edit Blog", err)
        res.status(500).json({error: "internal server error"})
    }
}

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params
        const { username } = req.user

        const delBlog = await Blog.deleteOne({ _id: id, author: username})
        if(delBlog){
            res.status(201).json({message: "Blog deleted"})
        } else {
            res.status(401).json({error: "couldn't delete blog"})
        }
    } catch (err) {
        console.log("Error occured in updateBlog, delBlog", err)
        res.status(500).json({error: "internal server error"})
    }
}

export {editBlog, deleteBlog}