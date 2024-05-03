import { Router } from "express";
import { newUser, loginUser } from "../controllers/user";
import validateToken from "./validate-token";

const router = Router();

router.post("/", validateToken, newUser);
router.post("/login", loginUser);

export default router;
