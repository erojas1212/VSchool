const express = require("express");
const bountyRouter = express.Router();
const Bounty = require("../models/bounties");

// Post
bountyRouter.post("/", (req, res, next) => {
  const newBounty = new Bounty(req.body);
  newBounty.save((err, savedBounty) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedBounty);
  });
});

// Get
bountyRouter.get("/", (req, res, next) => {
  Bounty.find((err, bounties) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(bounties);
  });
});

// Delete
bountyRouter.delete("/:bountyId", (req, res, next) => {
  Bounty.findOneAndDelete({ _id: req.params.bountyId }, (err, deleteItem) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res
      .status(200)
      .send(`Successfully deleted item ${deleteItem} frem database`);
  });
});

// Put (update)

bountyRouter.put("/:bountyId", (req, res, next) => {
  Bounty.findOneAndUpdate(
    { _id: req.params.bountyId },
    req.body,
    { new: true },
    (err, updateBounty) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updateBounty);
    }
  );
});

module.exports = bountyRouter;
