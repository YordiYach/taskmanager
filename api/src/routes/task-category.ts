import { Router } from "express";
import {
  getTaskCategories,
  getTaskCategory,
  addTaskCategory,
  updateTaskCategory,
  deleteTaskCategory,
} from "./../controllers/task-category";
import validateToken from "./validate-token";

const router = Router();

router.get("/", validateToken, getTaskCategories);
router.get("/:id", validateToken, getTaskCategory);
router.delete("/:id", validateToken, deleteTaskCategory);
router.post("/", validateToken, addTaskCategory);
router.put("/:id", validateToken, updateTaskCategory);

export default router;