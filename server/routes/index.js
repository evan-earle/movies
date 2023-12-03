import express from "express";
import { getPopularMovies } from "../controllers/music.js";

const router = express.Router();

router.get("/music/:page", getPopularMovies);

export default router;
