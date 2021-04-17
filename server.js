require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

const GETpostRoutes = require("./routes/GETpostRoutes");
const OTHERpostRoutes = require("./routes/OTHERpostRoutes");

app.use("/posts", OTHERpostRoutes);
app.use("/posts", GETpostRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
