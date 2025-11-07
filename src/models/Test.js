import mongoose from "mongoose";

//1- Define the schema
//2- Create the model

const testSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: { type: String },
  },
  { timestamps: true }
);

export const Test = mongoose.model("Test", testSchema);
