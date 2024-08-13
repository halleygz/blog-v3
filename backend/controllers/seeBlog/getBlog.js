import mongoose from "mongoose";
import Blog from "../../models/blogs.js";

// get single blog
const getSingleBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const singleBlog = await Blog.findById({_id: id});
    if (!singleBlog) {
      res.status(400).json({ error: "blog not found" });
    } else {
      res.status(200).json( singleBlog );
    }
  } catch (err) {
    console.log("error occured in getSingleBlog", err);
    res.status(500).json({ error: "internal server error" });
  }
};

//get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const skip = (page - 1) * limit
    const allBlogs = await Blog.find().sort({updatedAt: -1}).skip(skip).limit(limit);
    const totalBlogs = await Blog.countDocuments()
    if (!allBlogs || allBlogs.length === 0) {
      res.status(400).json({ error: "no blogs posted" });
    } else {
      res.status(200).json( {
        totalBlogs,
        currentPage: page,
        totalPages: Math.ceil(totalBlogs / limit),
        blogs: allBlogs
      } );
    }
  } catch (err) {
    console.log("error occured in getAllBlogs", err);
    res.status(500).json({ error: "internal server error" });
  }
};

export { getSingleBlog, getAllBlogs };
