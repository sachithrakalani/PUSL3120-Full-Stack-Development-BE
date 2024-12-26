import express from "express";
import { addMovie, getAllMovies } from "../controllers/movie-controller.js";

const movieRouter = express.Router();

movieRouter.post("/", addMovie);
movieRouter.get("/", getAllMovies);

export default movieRouter;