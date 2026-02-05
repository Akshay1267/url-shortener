import express from "express";
import { createShortUrl, getAnalytics } from "../controllers/url.js";
const router = express.Router();

router.post("/", createShortUrl);
router.get("/analytic/:shortId", getAnalytics);

export default router; 
