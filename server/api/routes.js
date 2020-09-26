/*

Routes for an express server

Filename: routes.js
Author: Adrian Palomares
Date: May 5, 2020
*/

const express = require("express");
const mongoose = require("mongoose");
const Todo = require("../models/todoModel");
const todoController = require("../controllers/todoController");

// Setting up router
const router = express.Router();

// Setting mongoose url
const mongooseUrl =
    process.env.MONGODB_URL || "mongodb://localhost:27017/todoapp";

mongoose.connect(mongooseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

//GET
router.get("/api/todos", todoController.todoList);

router.get("/api/todos/:id", todoController.todoDetail);

//POST
router.post("/api/todos", todoController.todoCreate);

//PUT
router.put("/api/todos/:id", todoController.todoUpdate);

//DELETE
router.delete("/api/todos/:id", todoController.todoDelete);

module.exports = router;
