import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  classroom: { type: mongoose.Schema.Types.ObjectId, ref: "Classroom" },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  note: String,
  updated_at: Date,
  createdAt: { type: Date, default: Date.now },
});

export const Note = mongoose.model("Note", noteSchema);
