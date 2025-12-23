import express from "express"
import { userValidation } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/validate", userValidation)

export default router;