import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  classroom: { type: mongoose.Schema.Types.ObjectId, ref: "Classroom", required: true },
  grade: { type: Number, required: true },
});   


export const Grade = mongoose.model("Grade", gradeSchema);