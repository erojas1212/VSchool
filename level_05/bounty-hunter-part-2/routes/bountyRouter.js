const express = require("express");
const bountyRouter = express.Router();
const uuid = require("uuid");

const bounty = [
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

//Get all the bounties
bountyRouter.get("/", (req, res) => {
  res.send(bounty);
});

//Post new bounties
bountyRouter.post("/", (req, res) => {
  const newBounty = req.body;
  newBounty._id = uuid.v4();
  bounty.push(newBounty);
  res.send(`Succesfully added ${newBounty} to the database`);
});

//Delete a bounty
bountyRouter.delete("/:id", (req, res) => {
  const bountyToDelete = req.params.id; //extacts the id
  const index = bounty.findIndex((bounty) => bounty._id === bountyToDelete); //finds the index
  bounty.splice(index, 1); //deletes it
  res.send(`Deleted bounty with id ${bountyToDelete}`);
});

//Put (Update) a bounty
bountyRouter.put("/:id", (req, res) => {
  const bountyToUpdate = req.params.id; //extracts id
  const updateBounty = req.body; // retrives the data
  const index = bounty.findIndex((bounty) => bounty._id === bountyToUpdate); //finds the correct id
  Object.assign(bounty[index], updateBounty)
  res.send(`Bounty with id ${bountyToUpdate} updated`)
})

module.exports = bountyRouter;
