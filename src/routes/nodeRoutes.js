import expess from "express";
const router = expess.Router();
import { getNotes } from "../controllers/notesController.js";

router.get("/", getNotes);

export default router;
