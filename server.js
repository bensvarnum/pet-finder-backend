require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const postRoutes = require('./routes/postRoutes');
app.use('/posts', postRoutes);
app.use(bodyParser.json())


app.listen(process.env.PORT, ()=> {
    console.log("Server Running on port: " + process.env.PORT)
})