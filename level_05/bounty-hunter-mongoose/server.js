const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

//dseVndobmkYvO8gv mongodb+srv://edurojas1212:<password>@cluster0.4ljboll.mongodb.net/

app.use(express.json());

app.use(morgan("dev"));

mongoose.set('strictQuery', true)

mongoose.connect(
  "mongodb+srv://edurojas1212:dseVndobmkYvO8gv@cluster0.4ljboll.mongodb.net",
  (err) => {
    console.log("connected to the db", err);
  }
);

app.use("/bounty", require("./routes/bountyRouter.js"));

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.listen(7000, () => {
  console.log("The server is running on Port 7000");
});
