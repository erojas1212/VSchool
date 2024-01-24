const express = require("express");
const Post = require("../models/inventory");
const inventory = require("../models/inventory");
const inventoryRouter = express.Router();

// Post
inventoryRouter.post("/", (req, res, next) => {
  const newItem = new Post(req.body);
  newItem.save((err, savedPost) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedPost);
  });
});

// Get
inventoryRouter.get("/", (req, res, next) => {
  Post.find((err, posts) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(posts);
  });
});

// Delete
inventoryRouter.delete("/:itemId", (req, res, next) => {
  inventory.findOneAndDelete({ _id: req.params.itemId }, (err, deleteItem) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res
      .status(200)
      .send(`Successfully deleted item ${deleteItem.name} from database`);
  });
});

// Update
inventoryRouter.put("/:itemId", (req, res, next) => {
  inventory.findOneAndUpdate(
    { _id: req.params.itemId },
    req.body,
    { new: true },
    (err, updatedItem) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedItem);
    }
  );
});


module.exports = inventoryRouter;
