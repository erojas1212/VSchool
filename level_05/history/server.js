const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
// const { toBeRequired } = require("@testing-library/jest-dom/matchers.js");

app.use(express.json());
app.use(morgan("dev"));
mongoose.set('strictQuery', true)

mongoose.connect(
  "mongodb+srv://edurojas1212:iPKEVSFAQqRh1Lgt@cluster0.s4uqiol.mongodb.net",
  (err) => {
    console.log("connected to db", err);
  }
);

app.use("/history", require("./routes/historyRouter.js"));
app.use('/userHistory', require("./routes/userHistotyRouter.js"))

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.listen(7500, () => {
  console.log("Server is running on post 7500");
});
