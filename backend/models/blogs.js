import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  author: {
    type: String,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: [{ type: String, default: "" }],
  searchable: {
    type: String,
  },
  likedBy: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  dislikedBy: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  // comments: []

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

BlogSchema.pre("save", function (next) {
  const searchables = `${this.title} ${this.content.slice(
    0,
    300
  )} ${this.tags.toString()} ${this.author}`;
  this.searchable = searchables;

  next();
});

const Blog = mongoose.model('blog', BlogSchema)

export default Blog