import { Router } from "express";
import protector from "../middleware/protector.js";
import createBlog from "../controllers/postBlog/addBlogPost.js";

const router = Router();
router.post("/create", protector, createBlog);

export default router;
