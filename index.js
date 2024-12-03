const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Create Responce
app.get("/", (req, res) => [res.send("Hello Node API")]);

//Add Moives
app.post('/api/moives',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
});

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
