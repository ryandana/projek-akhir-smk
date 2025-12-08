import { Router } from "express";
import {
    createComment,
    deleteComment,
    getComments,
} from "../controllers/comment.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/post/:postId", getComments);
router.post("/post/:postId", authMiddleware, createComment);
router.delete("/:id", authMiddleware, deleteComment);

export default router;
