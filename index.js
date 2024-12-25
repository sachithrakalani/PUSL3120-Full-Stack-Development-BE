import mongoose from "mongoose";
import express from "express";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";

const app = express();

//Middleware
app.use(express.json())
app.use("/user", userRouter);
app.use("/admin", adminRouter)

//Create Responce
app.get("/", (req, res) => [res.send("Hello Node API")]);

//Connect the Database
mongoose
  .connect(
    "mongodb+srv://kalanisathyangi:Fmm8ncu3xBlRdBig@cinema-booking-system-d.1ahkq.mongodb.net/Cinema-Booking-System?retryWrites=true&w=majority&appName=Cinema-booking-system-DB"
  )
  .then(() => {
    console.log("Connected to the Database!!");
    //Create Server
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed!!");
  });
