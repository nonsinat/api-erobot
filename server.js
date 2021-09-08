const express = require("express");
const cors = require("cors");
const config = require("./config.json");
const mongoose = require("mongoose");


const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res,next)=>{
    res.send("Hey your server is life !");
});

mongoose.connect(config.DB_URL,{
    // userCreateIndex:true,
    // userFindAndMotify: true,
    // userUnifiedTopology:true,
    // userNewUrlParser: true,   
},(err)=>{
    if (err) return console.log(err);
    console.log("DB Connected");
    
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running on PORT 3000"));  