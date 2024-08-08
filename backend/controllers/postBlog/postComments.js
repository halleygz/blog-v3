import Blog from "../../models/blogs.js"
import {Comment} from "../../models/comments.js"

const postComment = async (req,res)=>{
    try {
        const { comment } = req.body
        const {username} = req.user
        const blogId = req.params.id
        const newComment = await Comment.create({
            commenter: username,
            content: comment,
        })
    
        if(newComment) {
            const updateBlog = await Blog.findByIdAndUpdate(blogId, {
                $push: {comments: newComment}
            })
            if (updateBlog) {
                res.status(201).json(newComment)
            }
        } else {
            res.status(401).json({error: "couldn't post your comment"})
        }
    } catch (err) {
        console.log('Error occured in postComment.js', err)
        res.status(500).json({error: "internal server error"})
    }
}

export default postComment