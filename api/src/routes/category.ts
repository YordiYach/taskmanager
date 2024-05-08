import { Router } from "express";
import {
  getCategories,
  getCategory,
  deleteCategory,
  addCategory,
  updateCategory,
} from "../controllers/category";
import validateToken from "./validate-token";

const router = Router();

router.get("/", validateToken, getCategories);
router.get("/:id", validateToken, getCategory);
router.delete("/:id", validateToken, deleteCategory);
router.post("/", validateToken, addCategory);
router.put("/:id", validateToken, updateCategory);

export default router;
