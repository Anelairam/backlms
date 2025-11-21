import mongoose from "mongoose";

const classroomSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Notes" }],
  })