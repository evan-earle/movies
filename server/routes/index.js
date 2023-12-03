import express from "express";
import { getPopularMovies } from "../controllers/music.js";

const router = express.Router();

router.get("/music", getPopularMovies);

export default router;
