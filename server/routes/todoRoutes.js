const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todoController");

router.get("/api/todos", todoController.todoList);

router.get("/api/todos/:id", todoController.todoDetail);

router.post("/api/todos", todoController.todoCreate);

router.put("/api/todos/:id", todoController.todoUpdate);

router.delete("/api/todos/:id", todoController.todoDelete);

module.exports = router;
