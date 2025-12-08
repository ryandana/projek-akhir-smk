import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";

export const getComments = async (req, res) => {
    try {
        const { postId } = req.params;
        const comments = await Comment.find({ post: postId })
            .populate("author", "nickname avatar_url")
            .sort({ createdAt: -1 }); // Newest first

        res.status(200).json(comments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const createComment = async (req, res) => {
    try {
        const { postId } = req.params;
        const { content, parentId } = req.body;
        const userId = req.user.id;

        const post = await Post.findById(postId);
        if (!post) return res.status(404).json({ message: "Post not found" });

        const newComment = await Comment.create({
            content,
            author: userId,
            post: postId,
            parent: parentId || null,
        });

        const populatedComment = await Comment.findById(
            newComment._id
        ).populate("author", "nickname avatar_url");

        res.status(201).json(populatedComment);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const comment = await Comment.findById(id);
        if (!comment)
            return res.status(404).json({ message: "Comment not found" });

        if (comment.author.toString() !== userId) {
            return res
                .status(403)
                .json({ message: "You can only delete your own comments" });
        }

        await Comment.findByIdAndDelete(id);
        // Also delete replies? Yes.
        await Comment.deleteMany({ parent: id });

        res.status(200).json({ message: "Comment deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};
