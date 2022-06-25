require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require("./api/router");
const app = express();
const PORT = process.env.PORT | 5000;

const mongo_URL = process.env.MONGODB_URI;
console.log("connecting to mongoDB");
mongoose.connect(mongo_URL);
app.use(express.json())
app.use("/api", apiRouter);
app.use(express.static("build"));

app.listen(PORT, () => {
  console.log("server started on port 5000");
});
