import "dotenv/config";
import express from "express";
import { connectDB } from "./src/config/db.js";
import cors from "cors";
import { expressjwt as jwt } from "express-jwt";
import jwks from "jwks-rsa";

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

// 🔒 Auth0 middleware
const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    jwksUri: `https://${process.env.AUTH_TENANT}/.well-known/jwks.json`,
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,

  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH_TENANT}/`,
  algorithms: ["RS256"],
});

app.use(checkJwt)
