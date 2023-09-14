const express = require("express");
const jediRouter = express.Router();
const uuid = require("uuid")

const jedi = [
  { name: "Darth", lastName: "Vader", living: true, bountyAmout: 100000 , type: "sith", _id: uuid.v4() },
  { name: "Obi-Wan", lastName: "Kenobi", living: true, bountyAmout: 75000 , type: "jedi",_id: uuid.v4() }
];

jediRouter
  .route("/")
  .get((req, res) => {
    res.send(jedi);
  })
  .post((req, res) => {
    const newJedi = req.body;
    jedi.push(newJedi);
    res.send(`Successfully added ${newJedi} to the database!`);
  });
  .delete((req, res) => {
   const jediIdToDelete = req.body._id;
  })

module.exports = jediRouter;
