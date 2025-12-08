import Post from "../models/post.model.js";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });

        res.status(200).json({ count: posts.length, posts });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getSinglePost = async (req, res) => {
    try {
        const findPost = await Post.findById(req.params.id);
        if (!findPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        return res.status(200).json(findPost);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const createPost = async (req, res) => {
    try {
        const { title, body, userId, tags } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: "Thumbnail is required" });
        }

        const imageUrl = await uploadToCloudinary(req.file.buffer);

        const words = body.trim().split(/\s+/).length;
        const readingTime = Math.ceil(words / 200);

        const newPost = await Post.create({
            title,
            body,
            author: userId,
            thumbnail_url: imageUrl,
            tags,
            readingTime,
        });

        res.status(201).json({
            message: "Successfully created post",
            post: newPost,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updatePost = async (req, res) => {
    try {
        const { title, body, tags } = req.body;

        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        let imageUrl = post.thumbnail_url;

        if (req.file) {
            imageUrl = await uploadToCloudinary(req.file.buffer);
        }

        let readingTime = post.readingTime;
        if (body) {
            const words = body.trim().split(/\s+/).length;
            readingTime = Math.ceil(words / 200);
        }

        post.title = title ?? post.title;
        post.body = body ?? post.body;
        post.tags = tags ?? post.tags;
        post.thumbnail_url = imageUrl;
        post.readingTime = readingTime;

        const updated = await post.save();

        res.status(200).json({
            message: "Successfully updated post",
            post: updated,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deletePost = async (req, res) => {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
        return res.status(404).json({ message: "Post not found" });
    }
    return res.status(201).json({ message: "Post successfully deleted" });
};
