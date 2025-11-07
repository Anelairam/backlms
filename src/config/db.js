import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Database connection logic here
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
};
