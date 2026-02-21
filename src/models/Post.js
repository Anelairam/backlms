import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  message: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  classroom: { type: mongoose.Schema.Types.ObjectId, ref: "Classroom" },
  updated_at: Date,
  createdAt: { type: Date, default: Date.now },
});

export const Post = mongoose.model("Post", postSchema);
