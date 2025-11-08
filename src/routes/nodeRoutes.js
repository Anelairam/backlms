import expess from "express";
const router = expess.Router();
import { getNotes } from "../controllers/notesController.js";
import { createNotes } from "../controllers/notesController.js";

router.get("/", getNotes);
router.post("/", createNotes);

export default router;
