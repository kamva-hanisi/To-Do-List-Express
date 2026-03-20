const express = require("express");
const app = express();
const port = 3000;
const uuid = require("uuid");

// Middleware
app.use(express.json());

const todos = [
  { id: "1", desc: "write MongoDB code", isCompleted: false },
  { id: "2", desc: "write Node code", isCompleted: true },
  { id: "3", desc: "write Java code", isCompleted: false },
  { id: "4", desc: "write Express code", isCompleted: true },
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

app.post("/todos", (req, res) => {
  let body = req.body;
  console.log(body);
  todos.push({ id: uuid.v4(), ...body });
  res.json(todos);
});

app.put("/todos/:id", (req, res) => {
  let todo = todos.find((todo) => todo.id === req.params.id);
  if (todo) {
    todo.desc = req.body.desc;
    todo.isCompleted = req.body.isCompleted;
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

app.delete("/todos/:id", (req, res) => {
  res.json([]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
