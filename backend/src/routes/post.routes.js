import { Router } from "express";
import {
    deletePost,
    getAllPosts,
    getSinglePost,
    updatePost,
} from "../controllers/post.controller.js";

const router = Router();

router.get("/", getAllPosts);
router.get("/:id", getSinglePost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

export default router;
