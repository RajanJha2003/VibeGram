import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  caption: {
    type: String,
    dwfault: "",
  },
  image: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

export const Post = mongoose.model("Post", postSchema);
