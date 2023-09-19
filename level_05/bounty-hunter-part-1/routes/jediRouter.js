const express = require("express");
const jediRouter = express.Router();
const uuid = require("uuid");

const jedi = [
  {
    name: "Darth",
    lastName: "Vader",
    living: true,
    bountyAmout: 100000,
    type: "sith",
    _id: uuid.v4(),
  },
  {
    name: "Obi-Wan",
    lastName: "Kenobi",
    living: true,
    bountyAmout: 75000,
    type: "jedi",
    _id: uuid.v4(),
  },
];

jediRouter.get("/", (req, res) => {
  res.send(jedi);
});
jediRouter.post("/", (req, res) => {
  const newJedi = req.body;
  newJedi._id = uuid.v4();
  jedi.push(newJedi);
  res.send(`Successfully added ${newJedi} to the database!`);
});
jediRouter.delete("/:id", (req, res) => {
  const jediIdToDelete = req.params.id;//extracts the 'id' and assign to a variable.
  const index = jedi.findIndex((jedi) => jedi._id === jediIdToDelete);
  jedi.splice(index, 1);
  res.send(`Delted Jedi with id ${jediIdToDelete}`);
});
jediRouter.put("/:id", (req, res) => {
  const jediIdToUpdate = req.params.id; //extracts the 'id' and assign to a variable.
  const updatedJedi = req.body; //retrive data and assign it to a varible
  const index = jedi.findIndex((jedi) => jedi._id === jediIdToUpdate);
  Object.assign(jedi[index], updatedJedi); //updates the object, to the found index jedi[index], then updates it with new values
  res.send(`Jedi with id ${jediIdToUpdate} updated`);
});

module.exports = jediRouter;
