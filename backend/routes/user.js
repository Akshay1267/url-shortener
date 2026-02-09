import express from "express";
import { createUser, loginUser } from "../controllers/user.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);

export default router;