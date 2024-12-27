import express from "express";
import { getBookingById, newBooking } from "../controllers/booking-controller.js";

const bookingsRouter = express.Router();

bookingsRouter.post("/", newBooking);
bookingsRouter.get("/:id", getBookingById);

export default bookingsRouter;
