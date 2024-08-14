import { Router } from "express";
import protector from "../middleware/protector.js";
import createBlog from "../controllers/postBlog/addBlogPost.js";
import { getAllBlogs, getSingleBlog } from "../controllers/seeBlog/getBlog.js";
import postComment from "../controllers/postBlog/postComments.js";
import { deleteBlog, editBlog } from "../controllers/updateDeleteBlog/updateBlog.js";

const router = Router();
router.post("/create", protector, createBlog);
router.get("/read/:id", protector, getSingleBlog);
router.post("/create/:id/comment", protector, postComment);
router.post("/edit/:id", protector, editBlog);
router.post("/edit/:id/delete", protector, deleteBlog);
router.get("/read", protector, getAllBlogs);

export default router;
