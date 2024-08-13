import Blog from "../../models/blogs.js";

const createBlog = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const { username } = req.user;

    const blog = await Blog.create({
      author: username,
      title,
      content,
      tags,
    });

    if (blog) {
      res.status(201).json({
        message: "blog created",
        _id: blog._id,
        author: blog.author,
        title: blog.title,
        content: blog.content,
        tags: blog.tags,
      });
    } else {
      res.status(401).json({ err: "Couldn't create blog" });
    }
  } catch (err) {
    console.log("error occurred in addBlogPost.js", err);
    res.status(500).json({ error: "internal server error" });
  }
};

export default createBlog;
