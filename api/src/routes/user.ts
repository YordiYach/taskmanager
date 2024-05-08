import { Router } from "express";
import {
  newUser,
  loginUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user";
import validateToken from "./validate-token";

const router = Router();

/**
 * @swagger
 * /api/users:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Retorna todas los usuarios registrados
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: Se ha obtenido el registro de usuarios
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 *      404:
 *        description: Linea no encontrada.
 */

router.get("/", validateToken, getUsers);

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Retorna todas los usuarios registrados
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID Usuario
 *    responses:
 *      200:
 *        description: Se ha obtenido el registro de usuarios
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 *      404:
 *        description: Linea no encontrada.
 */

router.get("/:id", validateToken, getUser);

router.delete("/:id", validateToken, deleteUser);

router.put("/:id", validateToken, updateUser);

router.post("/", validateToken, newUser);

/**
 * @swagger
 * /api/users/login:
 *  post:
 *    summary: Inicio de sesión
 *    tags: [Inicio de sesión]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Login'
 *    responses:
 *      200:
 *        description: Sesión iniciada.
 */
router.post("/login", loginUser);

export default router;
