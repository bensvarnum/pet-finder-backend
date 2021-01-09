require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();


app.listen(process.env.PORT, ()=> {
    console.log("Server Running on port: " + process.env.PORT)
})