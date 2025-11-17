import expess from "express";
import { userValidate } from "../controllers/userControllers.js";
const router = expess.Router();

router.post("/validate", userValidate);

export default router;