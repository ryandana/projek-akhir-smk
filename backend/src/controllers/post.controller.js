import Post from "../models/post.model.js";

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
        const { title, body, thumbnail_url, userId, tags } = req.body;

        const createPost = await Post.create({
            title,
            body,
            thumbnail_url,
            author: userId,
            tags,
        });

        return res
            .status(201)
            .json({ message: "Successfully create post", createPost });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const updatePost = async (req, res) => {
    try {
        const { title, body, thumbnail_url, tags } = req.body;

        const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
            title,
            body,
            thumbnail_url,
            tags,
        });
        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        return res
            .status(201)
            .json({ message: "Successfully updated post", updatedPost });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const deletePost = async (req, res) => {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
        return res.status(404).json({ message: "Post not found" });
    }
    return res.status(201).json({ message: "Post successfully deleted" });
};
