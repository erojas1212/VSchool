const express = require("express");
const todosRouter = express.Router();
const uuid = require("uuid");

const todos = [
  {
    name: "The name",
    description: "The description of the todo",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuid.v4(),
  },
  {
    name: "The name2",
    description: "The description of the todo2",
    imageUrl: "http://www.myimage....2",
    completed: true,
    _id: uuid.v4(),
  },
];

//GET all todos
todosRouter.get("/", (req, res) => {
  res.send(todos);
});

//GETsingle todo by id
todosRouter.get("/:id", (req, res) => {
  const todosId = req.params.id;
  const todos = todos.find((i) => i._id === todosId);
  res.send(todos);
});

//Post new todo
todosRouter.post("/", (req, res) => {
  const newTodo = req.body;
  newTodo._id = uuid.v4();
  todos.push(newTodo);
  res.send(`Succesfully added ${newTodo} to the database`);
});

//Put update a todo
todosRouter.put("/:id", (req, res) => {
  const todoToUpdate = req.params.id;
  const updateTodo = req.body;
  const index = todos.findIndex((todos) => todos._id === todoToUpdate);
  Object.assign(todos[index], updateTodo);
  res.send(`Todos with id ${todoToUpdate} updated`);
});

//Delete a Todo
todosRouter.delete("/:id", (req, res) => {
  const todoToDelete = req.params.id;
  const index = todos.findIndex(todos => todos._id === todoToDelete);
  todos.splice(index, 1);
  res.send(`Delted todo with id ${todoToDelete}`)
})

module.exports = todosRouter;
