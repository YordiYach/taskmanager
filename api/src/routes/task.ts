import { Router } from "express";
import {
  getTasks,
  getTask,
  deleteTask,
  addTask,
  updateTask,
} from "../controllers/task";
import validateToken from "./validate-token";

const router = Router();

router.get("/", validateToken, getTasks);
router.get("/:id", validateToken, getTask);
router.delete("/:id", validateToken, deleteTask);
router.post("/", validateToken, addTask);
router.put("/:id", validateToken, updateTask);

export default router;
