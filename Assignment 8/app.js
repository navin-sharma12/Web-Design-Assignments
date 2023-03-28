const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();

app.use(bodyParser.json());

const userRouter = require("./routes/user");

app.use("/user", userRouter);

// mongoose.connect(
//   "mongodb://localhost:27017/assignment8?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false",
//   { family: 4 },
//   () => {
//     console.log("connected to db, starting app");
//     app.listen(3000);
//     console.log("app started");
//   }
// );
mongoose.connect("mongodb://localhost:27017/assignment8?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB database');
    app.listen(8080);
    console.log("app started");
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB database', err);
  });