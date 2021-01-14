require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.json())


const GETpostRoutes = require('./routes/GETpostRoutes');
const OTHERpostRoutes = require('./routes/OTHERpostRoutes');

app.use('/posts', OTHERpostRoutes);
app.use('/posts', GETpostRoutes);



app.listen(process.env.PORT, ()=> {
    console.log("Server Running on port: " + process.env.PORT)
})