import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
    commenter: {
        type: String,
        ref: "User",
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Comment = mongoose.model('comments', CommentSchema)
export {Comment, CommentSchema}