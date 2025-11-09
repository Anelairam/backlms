import expess from "express";
import { userCheck } from "../controllers/userController";
const router = expess.Router();

router.get("/api/profile", userCheck);

export default router;