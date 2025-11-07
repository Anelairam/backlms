import "dotenv/config";
import express from "express";
import nodeRoutes from "./routes/nodeRoutes.js";
import { connectDB } from "./config/db.js";
const app = express();
const PORT = process.env.PORT || 5001;

app.use("/api/nodes", nodeRoutes);
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
