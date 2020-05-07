/*

Routes for an express server

Filename: routes.js
Author: Adrian Palomares
Date: May 5, 2020
*/

const express = require("express");
const mongoose = require("mongoose");

// Setting up router
const router = express.Router();

// Setting mongoose url
const mongooseUrl = process.env.MONGODB_URL || "mongodb://localhost:27017/todoapp";

mongoose.connect(mongooseUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

//Todo Schema
const Todo = mongoose.model("todos", {
  title: String,
  content: String
});

//GET
router.get("/api/todos", function(request, response) {
  Todo.find({}, function(err, docs) {
    if (err) {
      console.log(err);
    } else {
      response.json(docs);
    }
  });
});

router.get("/api/todos/:id", function(request, response) {
  let id = request.params.id;
  Todo.find({ _id: id }, function(err, docs) {
    if (err) {
      console.log(err);
    } else {
      response.json(docs);
    }
  });
});

//POST
router.post("/api/todos", function(request, response) {
  let title = request.body.title;
  let content = request.body.content;
  Todo.create({ title: title, content: content }, function(err, todo) {
    if (err) {
      console.log(err);
    } else {
      response.status(200).send(todo);
    }
  });
});

//PUT
router.put("/api/todos/:id", function(request, response) {
  Todo.findById(request.params.id, function(err, todo) {
    if (err) {
      console.log(err);
    }
    todo.title = request.body.title;
    todo.content = request.body.content;

    //Save the todo
    todo.save(function(err) {
      if (err) {
        console.log(err);
      }
      response.send(todo);
    });
  });
});

//DELETE
router.delete("/api/todos/:id", function(request, response) {
  let id = request.params.id;
  Todo.findOneAndRemove({ _id: id }, function(err, todo) {
    if (err) {
      console.log(err);
    } else {
      response.send(todo);
    }
  });
});

module.exports = router;