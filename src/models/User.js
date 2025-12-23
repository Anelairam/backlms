import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  auth0Id: { type: String, required: true, unique: true },
  validatedData: Boolean,
  first_name: String,
  last_name: String,
  email: String,
  classroom: [{ type: mongoose.Schema.Types.ObjectId, ref: "Classroom" }],
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],   
  role: {
    type: String,
    enum: ["student", "instructor", "admin"],
    default: "student",
  },
  updated_at: Date,
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model("User", userSchema);
