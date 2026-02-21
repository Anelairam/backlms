import express from "express"
import { userValidation } from "../controllers/userControllers.js";
import { getUserClassroom } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/validate", userValidation)
router.get("/classroom", getUserClassroom)

export default router;