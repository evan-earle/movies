import express from "express";
import { musicRoutes } from "../controllers/music.js";

const router = express.Router();

router.use("/music", musicRoutes);

export default router;
