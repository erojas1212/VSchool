const express = require("express");
const app = express();

app.use(express.json());

const customMiddleware = require("./customMiddleware");

app.use("/users", customMiddleware);

app.use("/users", (req, res, next) => {
  console.log("THE ITEMS MIDDLEWARE WAS EXECUTED");
  next();
});

app.use("/users", (req, res, next) => {
  req.body = {
    name: "Ussop",
    age: 18,
    hobbies: ["playing", "shooter"],
  };
  next();
});

app.get("/users", (req, res, next) => {
  console.log("GET REQUEST RECIEVED");
  res.send(req.body);
});
// app.use("/users", require("./routes/usersRouter.js"));

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
