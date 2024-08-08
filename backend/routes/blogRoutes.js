import { Router } from "express";
import protector from "../middleware/protector.js";
import createBlog from "../controllers/postBlog/addBlogPost.js";
import { getAllBlogs, getSingleBlog } from "../controllers/seeBlog/getBlog.js";

const router = Router();
router.post("/create", protector, createBlog);
router.get("/read/:id", protector, getSingleBlog);
router.get("/read/", protector, getAllBlogs);

export default router;
