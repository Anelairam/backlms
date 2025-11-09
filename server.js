import "dotenv/config";
import express from "express";
import nodeRoutes from "./src/routes/nodeRoutes.js";
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
app.use(cors())

// 🔒 Auth0 middleware
const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH_DOMAIN}/`,
  algorithms: ["RS256"],
});


// 🧾 Example Schema
const UserSchema = new mongoose.Schema({
  auth0Id: { type: String, required: true, unique: true },
  name: String,
  email: String,
});
const User = mongoose.model("User", UserSchema);

// 🧩 Protected route
app.get("/api/profile", checkJwt, async (req, res) => {
  const auth0Id = req.auth.sub; // Auth0 user ID from token

  let user = await User.findOne({ auth0Id });
  if (!user) {
    user = await User.create({ auth0Id, name: "New User" });
  }

  res.json(user);
});

app.use("/api/nodes", nodeRoutes);
