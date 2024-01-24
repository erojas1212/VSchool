const express = require("express");
const bountyRouter = express.Router();
const uuid = require("uuid");

const bounty = [
  {
    name: "Darth",
    lastName: "Vader",
    living: true,
    bountyAmount: 100000,
    type: "sith",
    _id: uuid.v4(),
  },
  {
    name: "Obi-Wan",
    lastName: "Kenobi",
    living: true,
    bountyAmount: 75000,
    type: "jedi",
    _id: uuid.v4(),
  },
  {
    name: "Darth-",
    lastName: "Maul",
    living: true,
    bountyAmount: 90000,
    type: "sith",
    _id: uuid.v4(),
  },
];

//get all
bountyRouter.get("/", (req, res) => {
  res.send(bounty);
});

//post
bountyRouter.post("/", (req, res) => {
  const newBounty = req.body;
  newBounty._id = uuid.v4();
  bounty.push(newBounty);
  res.send(newBounty);
});

//delte
bountyRouter.delete("/:bountyId", (req, res) => {
  const bountyToDelete = req.params.bountyId;
  const index = bounty.findIndex((bounty) => bounty._id === bountyToDelete);
  bounty.splice(index, 1);
  res.send(`Delete bounty with id ${bountyToDelete}`);
});

//put (update)
bountyRouter.put("/:bountyId", (req, res) => {
  const bountyToUpdate = req.params.bountyId;
  const updateBounty = req.body;
  const index = bounty.findIndex((bounty) => bounty._id === bountyToUpdate);
  const updatedBounty = Object.assign(bounty[index], updateBounty);
  res.send(updatedBounty);
});

module.exports = bountyRouter;
