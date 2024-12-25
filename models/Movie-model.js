import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  actors: [{ type: String, required: true }],
  releaseDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  nowshowingImage: {
    type: String  
  },
  comingsoonImage: {
    type: String,
  },
  featured: {
    type: Boolean,
  },
  bookings: [{}],
  admin: {},
});

export default mongoose.model("Movie", movieSchema);
