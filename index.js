const express = require("express");
const app = express();
const port = 3000;

const todos = [
  { id: "1", desc: "write React code", isCompleted: true },
  { id: "2", desc: "write MongoDB code", isCompleted: false },
  { id: "3", desc: "write Node code", isCompleted: true },
  { id: "4", desc: "write Java code", isCompleted: false },
  { id: "5", desc: "write Express code", isCompleted: true },
];

// get, post, put, delete
app.get("/", (req, res, next) => {
  res.send("To-Do List");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  console.log(req.params.id);
  let todo = todos.filter((todo) => todo.id === req.params.id);
  res.json(todo);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
