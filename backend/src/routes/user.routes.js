import { Router } from "express";
import {
    searchUsers,
    getUserByUsername,
    getUserPosts,
    toggleFollow,
    checkFollowStatus,
    getFollowers,
    getFollowing,
    getRecommendedUsers,
    getPopularPosts,
    deleteUser,
} from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// Public routes
router.get("/search", searchUsers);
router.get("/recommended", authMiddleware, getRecommendedUsers);
router.get("/popular-posts", getPopularPosts);
router.get("/:username", getUserByUsername);
router.get("/:username/posts", getUserPosts);
router.get("/:username/followers", getFollowers);
router.get("/:username/following", getFollowing);

// Protected routes
router.get("/:username/follow-status", authMiddleware, checkFollowStatus);
router.post("/:username/follow", authMiddleware, toggleFollow);
router.delete("/me", authMiddleware, deleteUser);

export default router;
