const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const { expressjwt } = require("express-jwt");


//aqiBRHpOt0ts5Qfu
//mongodb+srv://edurojas1212:aqiBRHpOt0ts5Qfu@cluster0.4ymkfgu.mongodb.net/


// Middleware
app.use(express.json());
app.use(morgan("dev"));
mongoose.set("strictQuery", true);

// MongoDB connection
mongoose.connect(
  "mongodb+srv://edurojas1212:aqiBRHpOt0ts5Qfu@cluster0.4ymkfgu.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      throw err;
    }
    console.log("Connected to the DB");
  }
);

app.use(
  "/api",
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);

app.use("/auth", require("./routes/authRouter.js"));
app.use("/api/issue", require("./routes/issueRouter.js"));
app.use("/api/comment", require("./routes/commentRouter.js"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

// Start server
app.listen(7000, () => {
  console.log(`Server is running on local port 7000`);
});
