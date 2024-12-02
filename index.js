const express = require ('express');
const mongoose = require('mongoose');

const app = express();


//Create Server
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})


//Create Responce
app.get("/",(req,res)=>[
    res.send('Hello Node')
]);

//Connect the Database
mongoose.connect("mongodb+srv://kalanisathyangi:Fmm8ncu3xBlRdBig@cinema-booking-system-d.1ahkq.mongodb.net/Cinema-Booking-System?retryWrites=true&w=majority&appName=Cinema-booking-system-DB")
.then(()=>{
    console.log("Connected to the Database!!")
})
.catch(()=>{
    console.log("Connection Failed!!")
})