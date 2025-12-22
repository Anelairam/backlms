import "dotenv/config";
import express from "express";
import { connectDB } from "./src/config/db.js";
import cors from "cors";
import { expressjwt as jwt } from "express-jwt";
import jwks from "jwks-rsa";
import { auth } from "express-oauth2-jwt-bearer";

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
app.use(cors());

const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH_TENANT,
  tokenSigningAlg: "RS256",
});

console.log("JWT Check Middleware: ", jwtCheck);
// // enforce on all endpoints

app.get("/", jwtCheck, async (req, res) => {
  console.log("Request User:", req.auth);
  res.json({ message: "Authorized" });
});
