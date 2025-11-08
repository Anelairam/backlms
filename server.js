import "dotenv/config";
import express from "express";
import nodeRoutes from "./src/routes/nodeRoutes.js";
import { connectDB } from "./src/config/db.js";
const app = express();
const PORT = process.env.PORT || 5001;

connectDB()
  .then(() => {
    console.log("Connected to the database successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

//middleware
//revisit for revising
app.use(express.json());

app.use("/api/nodes", nodeRoutes);
