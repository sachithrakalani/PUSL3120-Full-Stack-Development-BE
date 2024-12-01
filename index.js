const express = require ('express');
const app = express();


//Create Server
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})


//Create Responce
app.get("/",(req,res)=>[
    res.send('Hello Node')
]);