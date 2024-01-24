const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const { expressjwt } = require("express-jwt");
const questionsRouter = require('./routes/questionsRouter');


//Middleware
app.use(express.json());
app.use(morgan("dev"));
mongoose.set("strictQuery", true);

//vj45C3PrNiZj5s7l
//mongodb+srv://edurojas1212:<password>@cluster0.1gyzgca.mongodb.net/

mongoose.connect(
  "mongodb+srv://edurojas1212:vj45C3PrNiZj5s7l@cluster0.1gyzgca.mongodb.net/",
  (err) => {
    if (err) {
      console.log('MongoDB connection error:', err);
      throw err;
    }
    console.log("Connected to DB");
  }
);


// Use routers
app.use("/auth", require("./routes/authRouter.js"));
app.use(
  "/api",
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);
app.use("/api/questions", questionsRouter);


// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

// Start server
app.listen(7500, () => {
  console.log(`Server is running on local port 7500`);
});
