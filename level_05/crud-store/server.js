const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(express.json());

app.use(morgan("dev"));

mongoose.set('strictQuery', true)

mongoose.connect(
  "mongodb+srv://edurojas1212:1UHM8UA4Cg2UokRw@cluster0.rqmrssw.mongodb.net",
  (err) => {
    console.log("connected to the db", err);
  }
);

app.use("/inventory", require("./routes/inventoryRouter"));

// error handler
app.use((err, req, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.listen(7500, () => {
    console.log("Server is running on port 7500")
})
