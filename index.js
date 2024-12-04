const express = require("express");
const mongoose = require("mongoose");
const Moives = require('./models/moive.model');

const app = express();

//Create Responce
app.get("/", (req, res) => [res.send("Hello Node API")]);

//Middleware
app.use(express.json());

//Add Moives
app.post('/api/moives',async (req,res)=>{
    try{
        const moives = await Moives.create(req.body);
        res.status(200).json(moives);
    }catch(error){
        res.status(500).json({message: error.message})
    }
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
