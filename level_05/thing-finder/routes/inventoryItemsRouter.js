const express = require("express");
const inventoryItemsRouter = express.Router();
const uuid = require("uuid");

const inventoryItems = [
  {
    name: "banana",
    type: "food",
    price: 200,
  },
  {
    name: "pants",
    type: "clothing",
    price: 2500,
  },
  {
    name: "basket ball",
    type: "toy",
    price: 1000,
  },
  {
    name: "rockem sockem robots",
    type: "toy",
    price: 1500,
  },
  {
    name: "shirt",
    type: "clothing",
    price: 800,
  },
  {
    name: "soup",
    type: "food",
    price: 300,
  },
  {
    name: "flour",
    type: "food",
    price: 100,
  },
];

//Get All
inventoryItemsRouter.get("/", (req, res) => {
  res.send(inventoryItems);
});

//Get by Type ====== localhost:9000/inventoryItems//search/type?type=toy
inventoryItemsRouter.get("/search/type", (req, res) => {
  const type = req.query.type;
  const filteredItem = inventoryItems.filter((item) => item.type === type);
  res.send(filteredItem);
});


//Get by type ====== localhost:9000/inventoryItems/food
inventoryItemsRouter.get("/:type", (req, res) => {
  const { type } = req.params;
  const filteredItem = inventoryItems.filter((item) => {
    return item.type === type;
  });

  res.send(filteredItem);
});

module.exports = inventoryItemsRouter;
