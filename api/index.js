var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Setting mongoose url
const mongooseUrl = process.env.MONGODB_URL || "mongodb://localhost:27017/todoapp";

mongoose.connect(mongooseUrl, { urlNewParser: true });

//Todo Schema
const Todo = mongoose.model("todos", {
  title: String,
  content: String
});

//GET
app.get("/api/todos", function(request, response) {
  Todo.find({}, function(err, docs) {
    if (err) {
      console.log(err);
    } else {
      response.json(docs);
    }
  });
});

app.get("/api/todos/:id", function(request, response) {
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
app.post("/api/todos", function(request, response) {
  let title = request.body.title;
  let content = request.body.content;
  Todo.create({ title: title, content: content }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log(request.body);
      response.status(200).send(request.body);
    }
  });
});

//PUT
app.put("/api/todos/:id", function(request, response) {
  console.log(request.body.title);
  console.log(request.body.content);
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
      response.send("Sucess");
    });
  });
});

//DELETE
app.delete("/api/todos/:id", function(request, response) {
  let id = request.params.id;
  Todo.deleteOne({ _id: id }, function(err) {
    if (err) {
      console.log(err);
    } else {
      response.sendStatus(200);
    }
  });
});

//Edit page
app.get("/edit/:id", function(request, response) {
  response.sendFile(path.join(__dirname + "/edit.html"));
});

// Main page
app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname + "/main.html"));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Listening on port: ${port}`);
});
