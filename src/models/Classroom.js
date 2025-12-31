import mongoose from "mongoose";

const classroomSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
//   notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],   
  updated_at: Date,
  createdAt: { type: Date, default: Date.now },
});

export const Classroom = mongoose.model("Classroom", classroomSchema);
