import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            required: true,
        },
        parent: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
            default: null,
        },
    },
    { timestamps: true }
);

// Virtual populate for replies
commentSchema.virtual("replies", {
    ref: "Comment",
    localField: "_id",
    foreignField: "parent",
});

// Ensure virtuals are serialized
commentSchema.set("toObject", { virtuals: true });
commentSchema.set("toJSON", { virtuals: true });

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
