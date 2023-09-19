const express = require("express");
const usersRouter = express.Router();
const uuid = require("uuid");

const users = [
  {
    name: "Luffy",
    age: 18,
    hobbies: ["eating", "sleeping", "fighting"],
    _id: uuid.v4
  },
  {
    name: "Nami",
    age: 25,
    hobbies: ["traveling", "shopping"],
    _id: uuid.v4
  },
  {
    name: "Zoro",
    age: 22,
    hobbies: ["training", "relaxing"],
    _id: uuid.v4
  },
];

usersRouter.get("/", (req, res) => {
  res.send(users);
});

usersRouter.delete("/:userId", (req, res) => {
  const userId = req.params.userId;
  const movieIndex = users.findIndex((user) => user._id === userId);
  users.splice(movieIndex, 1);
  res.send("Succesfully delete movie!");
});

module.exports = usersRouter;
