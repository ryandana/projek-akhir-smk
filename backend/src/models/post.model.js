import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        thumbnail_url: {
            type: String,
            default: null,
            required: true,
        },
        tags: [String],
        readingTime: Number,
    },
    { timestamps: true },
);

const Post = mongoose.model("Post", postSchema);
export default Post;
