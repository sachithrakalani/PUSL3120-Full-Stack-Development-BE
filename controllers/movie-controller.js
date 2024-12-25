import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import Admin from "../models/Admin-model.js";
import Movie from "../models/Movie-model.js";

export const addMovie = async (req, res, next) => {
  const extractedToken = req.headers.authorization.split(" ")[1];
  if (!extractedToken || extractedToken.trim() === "") {
    return res.status(404).json({ message: "Token Not Found" });
  }

  let adminId;

  // verify token
  jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted) => {
    if (err) {
      return res.status(400).json({ message: `${err.message}` });
    } else {
      adminId = decrypted.id;
      return;
    }
  });

  //create new movie
  const {
    title,
    description,
    releaseDate,
    endDate,
    nowshowingImage,
    comingsoonImage,
    featured,
    actors,
  } = req.body;
  if (
    !title ||
    title.trim() === "" ||
    !description ||
    description.trim() == "" ||
    !endDate ||
    endDate.trim() === "" ||
    !releaseDate ||
    releaseDate.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Inputs" });
  }

  let movie;
  try {
    movie = new Movie({
      description,
      releaseDate: new Date(`${releaseDate}`),
      endDate: new Date(`${endDate}`),
      featured,
      actors,
      admin: adminId,
      comingsoonImage,
      nowshowingImage,
      title,
    });
    const session = await mongoose.startSession();
    const adminUser = await Admin.findById(adminId);
    session.startTransaction();
    await movie.save({ session });
    adminUser.addedMovies.push(movie);
    await adminUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    return console.log(err);
  }

  if (!movie) {
    return res.status(500).json({ message: "Request Failed" });
  }

  return res.status(201).json({ movie });
};