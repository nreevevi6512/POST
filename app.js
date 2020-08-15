const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());

//IMPORT ROUTES
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("HI HANDSOME");
});

//CONNECT TO DB
mongoose.connect(
  process.env.DB_CONNECTS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("CONNECTED TO DB")
);
//LISTEN
app.listen(3000, function () {
  console.log("SERVER CONNECTED");
});
